import CarModel from '../models/carmodel';
import UserModel from '../models/usermodel';
import users from '../database/user';
import cars from '../database/car';

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
    // }
  }
}
export default carController;
