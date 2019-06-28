import db from '../../database';
import flagQueries from '../../models/V2/flags';


class flagController {
  static async flagAd(req, res) {
    try {
      const values = [
        req.body.carId,
        req.body.reason,
        new Date(),
        req.body.description,
        req.body.reportedBy,
      ];

      const {
        rows,
      } = await db.query(flagQueries.createQuery, values);
      return res.status(201).send({
        status: 201,
        message: 'Car ad reported successfully',
        data: rows[0],
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        status: 400,
        error: 'This Ad could not be reported',
      });
    }
  }
}

export default flagController;
