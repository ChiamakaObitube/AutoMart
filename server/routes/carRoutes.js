import { Router } from 'express';
import carController from '../controllers/car';
import { postAdValidator, updateAdPriceValidator, updateAdStatusValidator } from '../middleware/carValidation';
import upload from '../Config/multerConfig';
import cloudinaryImage from '../Config/cloudinaryConfig';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/car', Authentication, upload.single('imageUrl'), cloudinaryImage, postAdValidator, carController.createNewAd);
router.get('/car', Authentication, carController.getAllCars);
router.get('/car/status/available', Authentication, carController.availableCars);
router.get('/car/:id', Authentication, carController.getSpecificCar);
router.patch('/car/:id/status', Authentication, updateAdStatusValidator, carController.updateAdStatus);
router.patch('/car/:id/price', Authentication, updateAdPriceValidator, carController.updateAdPrice);
router.delete('/car/:id', Authentication, carController.deleteCar);
router.get('/car/status/:available/:new', carController.getAllNewAvailableCars);


export default router;
