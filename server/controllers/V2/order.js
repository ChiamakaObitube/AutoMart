import orderQueries from '../../models/V2/order';

import db from '../../database/index';


class orderController {
  static async postOrder(req, res) {
    try {
      const getUserByIdQuery = 'SELECT email FROM users WHERE id = $1';
      const getUser = await db.query(getUserByIdQuery, [req.user.id]);

      const values = [
        req.body.carId,
        getUser.rows[0].email,
        new Date(),
        req.body.status,
        parseFloat(req.body.price),
        parseFloat(req.body.priceOffered),
      ];

      const { rows } = await db.query(orderQueries.createQuery, values);
      return res.status(201).send({
        status: 201,
        message: 'Purchase Order created successfully',
        data: rows[0],
      });
    } catch (error) {
      console.log(error);
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
        message: 'All cars retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Error fetching orders, try again',
      });
    }
  }
}

export default orderController;
