import CarModel from '../models/carmodel';

// import UserModel from '../models/usermodel';
// import users from '../database/user';
// import cars from '../database/car';

class carController {
  static createNewAd(req, res) {
    if (!req.body.email && req.body.address
		&& !req.body.state && !req.body.status
		&& !req.body.manufacturer && req.body.price
		&& !req.body.model && !req.body.imageUrl
		&& !req.body.bodyType) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }

    const carExist = CarModel.getSpecificCar(req.body.id);


    if (carExist) {
      return res.status(400).send({
        status: 400,
        error: 'Car already exist',
      });
    }
    const newAd = CarModel.postAd(req.body);

    return res.status(201).json({
      status: 201,
      message: 'Car Ad posted successfully',
      data: newAd,
    });
  }

  static getAllCars(req, res) {
    const allCars = CarModel.getAllCars();
    // console.log(req.query.status);
    // if (allCars.length === 0) return res.status(404).send('There are no users');
    if (!allCars) {
      return res.status(404).send({
        status: 404,
        error: 'There are no cars in this database',
      });
    }

    return res.status(200).send({
      status: 200,
      message: 'All Car Ads retrieved successfully',
      data: allCars,
    });
  }

  static getSpecificCar(req, res) {
    const { id } = req.params;
    const car = CarModel.getSpecificCar(Number(id));
    if (!car) {
      return res.status(404).json({
        status: 404,
        message: 'car does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Car Ad retrieved successfully',
      data: car,
    });
  }

  static updateAdStatus(req, res) {
    const { id } = req.params;
    const car = CarModel.getSpecificCar(Number(id));
    if (!car) {
      return res.status(404).json({
        status: 404,
        message: 'car does not exist',
      });
    } if (!car.status) {
      return res.status(400).json({
        status: 400,
        message: 'car status is required',
      });
    }

    car.status = req.body.status;
    return res.status(200).json({
      status: 200,
      message: 'car successfully marked as sold',
      data: car,
      // {
      //     id: car.id,
      //     updatedOn: Date(),
      //     status: car.status,

    //   },
    });
  }

  static updateAdPrice(req, res) {
    const { id } = req.params;
    const car = CarModel.getSpecificCar(Number(id));
    if (!car) {
      return res.status(404).json({
        status: 404,
        message: 'car does not exist',
      });
    }
    if (!car.price) {
      return res.status(400).json({
        status: 400,
        error: 'car price is required',
      });
    }

    car.price = req.body.price;
    

    return res.status(200).json({
      status: 200,
      message: 'car price updated successfully',
      data: car,
    });
  }

  static availableCars(req, res) {
    // const { status } = req.params;
    const allAvailableCars = CarModel.getAvailableCars();
    // console.log(allAvailableCars);
    if (!allAvailableCars) {
      res.status(404).json({ status: 404, message: 'no available cars' });
    } return res.status(200).json({
      status: 200,
      data: allAvailableCars,
    });
    // if (cars.length === 0) {
    //   let responseObject;
    //   if (status && status === 'available') {
    //     responseObject = { available: 0 };
    //   }
    //   res.status(404).send(responseObject);
    // } else {
    //   const responseObject = CarModel.getAvailableCars();
    //   if (status && status === 'available') {
    //     responseObject = cars.length;
    //   }
    //   return res.send(responseObject);
    // }
  }


  static deleteCar(req, res) {
    const { id } = req.params;
    const car = CarModel.getSpecificCar(Number(id));
    if (!car) {
      return res.status(404).json({
        status: 404,
        message: 'car does not exist',
      });
    }
    const deletedCar = CarModel.deleteOneCar(Number(id));
    return res.status(202).json({
      status: 202,
      message: 'Car Ad deleted successfully',
      data: deletedCar,
    });
  }
}
export default carController;
