import Helper from '../../middleware/helper';
import db from '../../database';
import carQueries from '../../models/V2/car';


class carController {
  static async createNewAd(req, res) {
    try {
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
      // Destructuring the user data.
      const {
        id,
        owner,
        email,
        state,
        created_on,
        manufacturer,
        model,
        body_type,
        image_url,
      } = rows[0];
      const token = Helper.generateToken(rows[0]);
      const carData = {
        id,
        owner,
        email,
        state,
        status,
        created_on,
        manufacturer,
        model,
        body_type,
        image_url,
        token,
      };
      return res.status(201).send({
        status: 201,
        message: 'Car ad created successfully',
        data: carData,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: 'Your advert could not be posted',
      });
    }
  }

  // Get all cars controller
  // Only admin can view all cars whether available or sold
  static async getAllCars(req, res) {
    try {
      const { rows, rowCount } = await db.query(carQueries.allCarsQuery);
      const token = Helper.generateToken(rows);
      const allCars = { rows, rowCount, token };
      if (rowCount === 0) {
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
        message: 'All cars retrieved successfully',
        data: allCars,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Error fetching cars, try again',
      });
    }
  }

  static async getSpecificCar(req, res) {
    try {
      const { rows } = await db.query(carQueries.specificCarQuery, [req.params.id]);
      const token = Helper.generateToken(rows[0]);
      const car = [
        rows[0],
        token,
      ];
      if (!rows[0]) {
        return res.status(404).send({
          message: 'car does not exist',
        });
      }
      return res.status(200).send({ status: 200, data: car });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Error fetching car, try again',
      });
    }
  }

  // A user (seller) can update the status of his ad as sold.
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
        message: 'Car successfully marked as sold',
        data: markSold.rows[0],
      });
    } catch (error) {
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

      const updatedCarPrice = await db.query(carQueries.updateCarPriceQuery, values);

      if (!rows[0]) {
        return res.status(400).send({
          error: 'car does not exist',
        });
      }
      // Car ad price can only be updated if car status is available
      if (updatedCarPrice.rows[0].status === 'sold') {
        return res.status(400).send({
          message: 'This car is already sold.',
        });
      }
      return res.status(200).send({
        status: 200,
        message: 'Car price updated successfully',
        data: updatedCarPrice.rows[0],
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

  static async getAllNewAvailableCars(req, res) {
    try {
      const { rows, rowCount } = await db.query(carQueries.newAvailableCarsQuery);
      if (rowCount === 0) {
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
      return res.status(400).send({
        error: 'Error fetching available cars, try again',
      });
    }
  }

  static async getAllUsedAvailableCars(req, res) {
    try {
      const { rows, rowCount } = await db.query(carQueries.usedAvailableCarsQuery);
      if (rowCount === 0) {
        return res.status(404).send({
          message: 'No results',
        });
      }

      return res.status(200).send({
        message: 'used available cars retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Error fetching used available cars, try again',
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
      if (!req.user.is_admin) {
        return res.status(401).send({
          status: 401,
          error: 'You are not authorized to perform this action',
        });
      }
      return res.status(202).send({
        message: 'Car deleted successfully',
      });
    } catch (error) {
      return res.status(400).send({
        error: 'Car cannot be deleted now, try again later',
      });
    }
  }
}
export default carController;
