import { Router } from 'express';
import carController from '../controllers/V2/car';
import {
  postAdValidator,
  updateAdPriceValidator,
  updateAdStatusValidator,
  getAvailableCarsWithinPriceRangeValidator,
} from '../middleware/carValidation';
import upload from '../Config/multerConfig';
import cloudinaryImage from '../Config/cloudinaryConfig';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/car', Authentication, upload.single('image_url'), cloudinaryImage, postAdValidator, carController.createNewAd);
router.get('/car', Authentication, carController.getAllCars);
ft-view-cars-within-price-range-endpoint-db-166735646
router.get('/car/:car-id', Authentication, carController.getSpecificCar);
router.patch('/car/:car-id/status', Authentication, updateAdStatusValidator, carController.updateCarAdStatus);
router.patch('/car/:car-id/price', Authentication, updateAdPriceValidator, carController.updateCarAdPrice);
router.get('/car/status/available', Authentication, carController.availableCars);
router.get('/car/status/available/new', Authentication, carController.getAllNewAvailableCars);
router.get('/car/status/available/used', Authentication, carController.getAllUsedAvailableCars);
router.delete('/car/:car-id', Authentication, carController.deleteCarAd);



export default router;
