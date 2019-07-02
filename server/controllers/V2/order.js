import orderQueries from '../../models/V2/order';
import carQueries from '../../models/V2/car';
import db from '../../database/index';


class orderController {
  static async postOrder(req, res) {
    try {
      const getCarByIdQuery = 'SELECT * FROM cars WHERE carid = $1';
      const getUserByIdQuery = 'SELECT email FROM users WHERE id = $1';

      const getUser = await db.query(getUserByIdQuery, [req.user.id]);
   		const getCar = await db.query(getCarByIdQuery, [req.params.carid]);
      const values = [
        req.body.carId,
        getUser.rows[0].email,
        new Date(),
        req.body.status,
        parseFloat(req.body.price),
        parseFloat(req.body.priceOffered),
      ];
      console.log(req.params.id);
      console.log(values);
      const {
        rows,
      } = await db.query(orderQueries.createQuery, values);
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
}

export default orderController;
