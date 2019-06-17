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

router.post('/car', Authentication, upload.single('imageUrl'), cloudinaryImage, postAdValidator, carController.createNewAd);
router.get('/car', Authentication, carController.getAllCars);
router.get('/car/:id', Authentication, carController.getSpecificCar);
router.patch('/car/:id/status', Authentication, updateAdStatusValidator, carController.updateCarAdStatus);
router.patch('/car/:id/price', Authentication, updateAdPriceValidator, carController.updateCarAdPrice);
router.get('/car/status/available', Authentication, carController.availableCars);
// router.get('/car/status/available/minPrice/maxPrice',
// getAvailableCarsWithinPriceRangeValidator, carController.getAvailableCarsMinMaxPrice);
router.get('/car/status/available/new', carController.getAllNewAvailableCars);
// router.get('/car/status/available/used', carController.getAllUsedAvailableCars);
router.delete('/car/:id', Authentication, carController.deleteCarAd);


export default router;
