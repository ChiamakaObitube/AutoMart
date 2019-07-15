import db from '../../database';
import flagQueries from '../../models/V2/flags';


class flagController {
  static async flagAd(req, res) {
    try {
      const { token } = req;
      const values = [
        req.body.car_id,
        req.body.reason,
        new Date(),
        req.body.description,
        req.body.reported_by,
      ];

      const { rows } = await db.query(flagQueries.createQuery, values);
      const {
        id,
        car_id,
        reason,
        status,
        created_on,
        description,
        reported_by,
      } = rows[0];

      const flaggedCar = {
        token,
        id,
        car_id,
        reason,
        status,
        created_on,
        description,
        reported_by,
      };
      return res.status(201).send({
        status: 201,
        message: 'Car ad reported successfully',
        data: flaggedCar,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error,
      });
    }
  }
}

export default flagController;
