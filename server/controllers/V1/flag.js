import CarModel from '../../models/carmodel';
import FlagModel from '../../models/V1/flagModel';

class flagController {
  static flagAd(req, res) {
    if (!req.body.car_id && !req.body.reason && !req.body.description
			&& req.body.reported_by) {
      return res.status(400).json({
        status: 400,
        error: 'input all fields',
      });
    }
    const { id } = req.params;
    // const car = CarModel.getSpecificCar(Number(id));
    // if (!car) {
    //   return res.status(404).json({
    //     status: 404,
    //     message: 'car does not exist',
    //   });
    // }

    const newFlag = FlagModel.flagAd(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Car Ad reported successfully',
      data: newFlag,
    });
  }

  static getAllFlags(req, res) {
    const flags = FlagModel.getFlags();
    if (flags.length === 0 || !flags) {
      return res.status(400).json({
        status: 400,
        message: 'No Car Ad has been reported yet.',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'all flags',
      data: flags,
    });
  }

  static getFlag(req, res) {
    const flag = FlagModel.getSpecificFlag(Number(req.params.id));
    if (!flag) {
      return res.status(404).json({
        status: 404,
        message: 'no such reported ad',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'flaged Ad found',
      data: flag,
    });
  }
}

export default flagController;
