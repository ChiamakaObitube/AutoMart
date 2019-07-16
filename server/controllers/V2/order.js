import Helper from '../../middleware/helper';
import orderQueries from '../../models/V2/order';
import carQueries from '../../models/V2/car';
import db from '../../database/index';


class orderController {
  static async postOrder(req, res) {
    try {
      const { token } = req;
      const status = 'pending';

      const getCar = [req.body.car_id];
      const { car_id, amount } = req.body;
      const car = await db.query('SELECT * FROM cars WHERE id = $1', getCar);
      // const car = 'SELECT id FROM cars WHERE id = $1';
      // console.log(car);

      const { price } = car.rows[0];
      // const { car_id } = car.rows[0];
      console.log(price);
      console.log(getCar);
      const values = [
        car_id,
        req.user.id,
        new Date(),
        status,
        req.body.amount,


      ];

      const { rows } = await db.query(orderQueries.createOrderQuery, values);
      const {
        id,
        buyer,
        new_price_offered,
        // new_price_offered: amount,
      } = rows[0];
      console.log(amount);
      const orderData = {
        token,
        id,
        car_id,
        buyer,
        price,
        amount,
      };

      return res.status(201).send({
        status: 201,
        message: 'Purchase Order created successfully',
        data: orderData,
        // {
        //   token,
        //   id,
        //   car_id,
        //   buyer,
        //   price,
        //   amount,
        // },
        // price: car.price,

      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async updatePurchaseOrderPrice(req, res) {
    try {
      const { amount } = req.body;
      const { token } = req;
      // const { id } = req.params;
      // const old_price_offered = price;

      // const values = [
      //   req.params.id,
      //   // req.body.new_price_offered,
      // ];

      // const getOrder = await db.query(orderQueries.specificOrderQuery, [req.params.id]);

      // // const { price } = getOrder;
      // //   console.log(getOrder, price );
      // if (!getOrder.rows[0]) {
      //   return res.status(404).send({
      //     message: 'order does not exist',
      //   });
      // }

      // const {
      //   id,
      //   car_id,
      //   buyer,
      //   price,
      //   price_offered,
      // } = getOrder.rows[0];


      // Purchase order price offered can only be updated if order status is pending
      const values = [
        req.params.id,
        amount,
      ];
      // Purchase order price offered can only be updated if order status is pending
      const { rows } = await db.query(orderQueries.updateOrderPriceQuery, values);
      console.log(rows[0]);
      const updatedOrderPrice = rows[0];
      // const updatedOrderPrice = rows[0];
      const {

        car_id,


        amount: new_price_offered,
      } = rows[0];

      if (!rows[0]) {
        return res.status(400).send({
          status: 400,
          error: 'car does not exist',
        });
      }
      // const updatedOrder = rows[0];
      // const updatedOrder = {
      //   token,
      //   car_id,
      //   buyer,
      //   status,
      //   new_price_offered,
      // };
      // console.log(updatedOrderPrice.new_price_offered);

      return res.status(200).send({
        status: 200,
        message: 'Order price updated successfully',
        data: { token, updatedOrderPrice },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const { rows } = await db.query(orderQueries.allOrdersQuery);
      if (!rows) {
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
      });
    } catch (error) {
      return res.status(500).send({
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
          status: 404,
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
