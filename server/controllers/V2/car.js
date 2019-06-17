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

  static async getSpecificCar(req, res) {
    try {
      const { rows } = await db.query(carQueries.specificCarquery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'car does not exist',
        });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send({
        error: 'Error fetching car, try again',
      });
    }
  }

  static async updateCarAdStatus(req, res) {
    try {
      const { rows } = await db.query(carQueries.getCarByIdQuery, [req.params.id]);
      const values = [
        req.params.id,
        'sold',
      ];
      if (!rows[0]) {
        return res.status(404).send({
          message: 'car does not exist',
        });
      }
      const markSold = await db.query(carQueries.markCarAsSoldQuery, values);
      return res.status(200).send({
        status: 200,
        data: {
          carid: markSold.rows[0].id,
          status: markSold.rows[0].status,
          message: 'Car successfully marked as sold',
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Error updating car status, try again',
      });
    }
  }

  static async updateCarAdPrice(req, res) {
    try {
      const { rows } = await db.query(carQueries.getCarByIdQuery, [req.params.id]);
      const values = [
        req.params.id,
        req.body.price,
      ];
      // Car ad price can only be updated if car status is available
      const updatedCarPrice = await db.query(carQueries.updateCarPriceQuery, values);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'car does not exist',
        });
      }
      return res.status(200).send({
        status: 200,
        data: {
          carid: updatedCarPrice.rows[0].id,
          price: updatedCarPrice.rows[0].price,
          message: 'Car price updated successfully',
        },
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Error updating car price, try again',
      });
    }
  }

  static async availableCars(req, res) {
    try {
      const { rows, rowCount } = await db.query(carQueries.availableCarsQuery);
      if (rowCount === 0) {
        return res.status(404).send({
          message: 'There are no available cars',
        });
      }

      return res.status(200).send({
        message: 'Available cars retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Error fetching available cars, try again',
      });
    }
  }

  static async deleteCarAd(req, res) {
    try {
      const { rows } = await db.query(carQueries.deleteCarByIdQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'This car does not exist',
        });
      }
      // if (!req.user.isAdmin) {
      //   return res.status(401).send({
      //     status: 401,
      //     error: 'You are not authorized to perform this action',
      //   });
      // }
      return res.status(202).send({
        message: 'Car deleted successfully',
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Car cannot be deleted now, try again later',
      });
    }
  }
}
export default carController;
