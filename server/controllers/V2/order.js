import orderQueries from '../../models/V2/order';
import db from '../../database/index';
import Helper from '../../middleware/helper';

const token = Helper.generateToken(rows[0]);


class orderController {
  static async postOrder(req, res) {
    try {
      const getUserByIdQuery = 'SELECT email FROM users WHERE id = $1';
      const getUser = await db.query(getUserByIdQuery, [req.user.id]);

      const values = [
        req.body.car_id,
        req.user.id,
        new Date(),
        req.body.status,
        parseFloat(req.body.price),
        parseFloat(req.body.price_offered),
      ];

      const { rows } = await db.query(orderQueries.createOrderQuery, values);
      return res.status(201).send({
        status: 201,
        message: 'Purchase Order created successfully',
        data: rows[0],
        token,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: 'Your order could not be  made',
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
        token,
        rowCount,
      });
    } catch (error) {
      return res.status(400).send({
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
      return res.status(200).send(token, rows[0]);
    } catch (error) {
      return res.status(400).send({
        error: 'Error fetching order, try again',
      });
    }
  }

  static async updatePurchaseOrderPrice(req, res) {
    try {
      const { rows } = await db.query(orderQueries.getOrderByIdQuery, [req.params.id]);
      const values = [
        req.params.id,
        req.body.price_offered,
      ];
      // Purchase order price offered can only be updated if order status is pending
      const updatedOrderPrice = await db.query(orderQueries.updateOrderPriceQuery, values);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'order does not exist',
        });
      }
      if (updatedOrderPrice.rows[0].status !== 'pending') {
        return res.status(400).send({
          token,
          message: 'you can only update a pending order.',
        });
      }
      return res.status(200).send({
        status: 200,
        data: updatedOrderPrice.rows[0],
        token,
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Error updating purchase order price offered, try again',
      });
    }
  }
}

export default orderController;
