import Helper from '../../middleware/helper';
import orderQueries from '../../models/V2/order';
import db from '../../database/index';


class orderController {
  static async postOrder(req, res) {
    try {
      const { token } = req;
      const status = 'pending';

      const values = [
        req.body.car_id,
        req.user.id,
        new Date(),
        status,
        parseFloat(req.body.amount),
        parseFloat(req.body.price_offered),
      ];
      const { rows } = await db.query(orderQueries.createOrderQuery, values);

      const {
        id,
        car_id,
        buyer,
        price: amount,
        price_offered,
      } = rows[0];

      const orderData = {
        token,
        id,
        car_id,
        buyer,
        amount,
        price_offered,
      };

      return res.status(201).send({
        status: 201,
        message: 'Purchase Order created successfully',
        data: orderData,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async updatePurchaseOrderPrice(req, res) {
    try {
      const { token } = req;
      // const { rows } = await db.query(orderQueries.getOrderByIdQuery, [req.params.id]);
      const values = [
        req.params.id,
        parseFloat(req.body.new_price_offered),
      ];
      // Purchase order price offered can only be updated if order status is pending
      const { rows } = await db.query(orderQueries.updateOrderPriceQuery, values);
      // const updatedOrder = rows[0];
      const {
        id,
        car_id,
        buyer,
        price: old_price_offered,
        price_offered: new_price_offered,
      } = rows[0];
      const updatedOrder = {
        token,
        id,
        car_id,
        buyer,
        old_price_offered,
        new_price_offered,
      };
      if (!rows[0]) {
        return res.status(404).send({
          message: 'order does not exist',
        });
      }

      return res.status(200).send({
        status: 200,
        data: updatedOrder,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'Error updating purchase order price offered, try again',
      });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const { rows, rowCount } = await db.query(orderQueries.allOrdersQuery);
      if (rowCount === 0) {
        return res.status(404).send({
          message: 'There are no orders in this database',
        });
      }
      if (!req.user.isAdmin) {
        return res.status(401).send({
          status: 401,
          error: 'You are not authorized to perform this action',
        });
      }
      return res.status(200).send({
        message: 'All orders retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(400).send({
        status: 500,
        error: 'Error fetching orders, try again',
      });
    }
  }

  static async getSpecificOrder(req, res) {
    try {
      const { rows } = await db.query(orderQueries.specificOrderQuery, [req.params.id]);

      if (!rows[0]) {
        return res.status(404).send({
          message: 'order does not exist',
        });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'Error fetching order, try again',
      });
    }
  }
}

export default orderController;
