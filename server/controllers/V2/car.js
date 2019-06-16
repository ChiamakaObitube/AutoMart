import db from '../../database';
import carQueries from '../../models/V2/car';


class carController {
  static async createNewAd(req, res) {
    const status = 'available';

    try {
      const getUser = await db.query(carQueries.getUserByIdQuery, [req.user.id]);
      const values = [
        req.user.id,
        getUser.rows[0].email,
        new Date(),
        req.body.state,
        status,
        parseFloat(req.body.price),
        req.body.manufacturer,
        req.body.model,
        req.body.bodyType,
        req.body.imageUrl,

      ];

      const { rows } = await db.query(carQueries.createQuery, values);
      return res.status(201).send({
        status: 201,
        message: 'Car ad created successfully',
        data: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: 'Your advert could not be posted',
      });
    }
  }

  // Get all cars controller
  static async getAllCars(req, res) {
    try {
      const { rows, rowCount } = await db.query(carQueries.allCarsQuery);
      if (rowCount === 0) {
        return res.status(404).send({
          message: 'There are no cars in this database',
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
        error: 'Error fetching cars, try again',
      });
    }
  }
}
export default carController;
