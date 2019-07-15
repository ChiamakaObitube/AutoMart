import db from '../../database';
import carQueries from '../../models/V2/car';

class carController {
  static async createNewAd(req, res) {
    try {
      const { token } = req;
      const status = 'available';
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
        req.body.body_type,
        req.body.image_url,
      ];
      const { rows } = await db.query(carQueries.createQuery, values);
      // Destructuring the car data.
      const {
        id,
        owner,
        email,
        state,
        created_on,
        price,
        manufacturer,
        model,
        body_type,
        image_url,
      } = rows[0];

      const carData = {
        token,
        id,
        owner,
        email,
        state,
        status,
        price,
        created_on,
        manufacturer,
        model,
        body_type,
        image_url,
      };
      if (carData) {
        return res.status(201).send({
          status: 201,
          message: 'Car ad created successfully',
          data: carData,
        });
      }
      return res.status(400).send({
        status: 'error',
        error: 'Your advert could not be posted',
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  // Get all cars controller
  // Only admin can view all cars whether available or sold
  static async getAllCars(req, res) {
    try {
      const { rows } = await db.query(carQueries.allCarsQuery);
      const { token } = req;
      const allCars = rows;
      if (rows === 0) {
        return res.status(404).send({
          message: 'There are no cars in this database',
        });
      }
      // if (!req.user.is_admin) {
      //   return res.status(401).send({
      //     status: 401,
      //     error: 'You are not authorized to perform this action',
      //   });
      // }
      return res.status(200).send({
        status: 200,
        token,
        message: 'All cars retrieved successfully',
        data: allCars,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async getSpecificCar(req, res) {
    try {
      const { rows } = await db.query(carQueries.specificCarQuery, [req.params.id]);
      const { token } = req;
      const car = rows[0];
      if (!rows[0]) {
        return res.status(404).send({
          message: 'car does not exist',
        });
      }
      return res.status(200).send({ status: 200, data: car, token });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  // A user (seller) can update the status of his ad as sold.
  static async updateCarAdStatus(req, res) {
    try {
      const { status } = req.body;
      const { token } = req;
      const values = [
        req.params.id,
        status,
      ];

      const { rows } = await db.query(carQueries.markCarAsSoldQuery, values);
      const updatedCar = rows[0];

      if (!rows[0]) {
        return res.status(404).send({
          status: 404,
          error: 'car does not exist',
        });
      }

      return res.status(200).send({
        status: 200,
        message: 'Car successfully marked as sold',
        data:
        updatedCar,
        token,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async updateCarAdPrice(req, res) {
    try {
      const { price } = req.body;
      const { token } = req;
      const values = [
        req.params.id,
        price,
      ];

      const { rows } = await db.query(carQueries.updateCarPriceQuery, values);
      const updatedCarPrice = rows[0];

      if (!rows[0]) {
        return res.status(400).send({
          status: 400,
          error: 'car does not exist',
        });
      }

      return res.status(200).send({
        status: 200,
        message: 'Car price updated successfully',
        data:
        updatedCarPrice,
        token,  
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,

        error,
      });
    }
  }

  static async availableCars(req, res) {
    try {
      const { token } = req;
      const { rows } = await db.query(carQueries.availableCarsQuery);
      if (rows === 0) {
        return res.status(404).send({
          message: 'There are no available cars',
        });
      }

      return res.status(200).send({
        message: 'Available cars retrieved successfully',
        data: rows,
        token,
      });
    } catch (error) {
      return res.status(500).send({
        error,
      });
    }
  }

  static async getAllNewAvailableCars(req, res) {
    try {
      const { rows } = await db.query(carQueries.newAvailableCarsQuery);
      if (rows === 0) {
        return res.status(404).send({
          message: 'No results',
        });
      }

      return res.status(200).send({
        message: 'new available cars retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async getAllUsedAvailableCars(req, res) {
    try {
      const { rows } = await db.query(carQueries.usedAvailableCarsQuery);
      if (rows === 0) {
        return res.status(404).send({
          message: 'No results',
        });
      }

      return res.status(200).send({
        message: 'used available cars retrieved successfully',
        data: rows,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }

  static async deleteCarAd(req, res) {
    try {
      const { token } = req;
      const { rows } = await db.query(carQueries.deleteCarByIdQuery, [req.params.id]);

      const car = [
        token,
        rows[0],
      ];
      if (!rows[0]) {
        return res.status(404).send({
          status: 400,
          message: 'This car does not exist',
        });
      }

      return res.status(202).send({
        status: 202,
        message: 'Car deleted successfully',
        data: car,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error,
      });
    }
  }
}
export default carController;
