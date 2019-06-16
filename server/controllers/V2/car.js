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
      console.log(error);
      return res.status(400).send({
        status: 400,
        error: 'Your advert could not be posted',
      });
    }
  }
}
export default carController;
