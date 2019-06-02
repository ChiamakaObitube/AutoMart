import { Router } from 'express';
import carcontroller from '../controllers/car';
import { postAdValidator, updateAdPriceValidator, updateAdStatusValidator } from '../middleware/carValidation';
import upload from '../Config/multerConfig';
import cloudinaryImage from '../Config/cloudinaryConfig';


const router = Router();

router.post('/car', postAdValidator, upload.single('imageUrl'), cloudinaryImage, carcontroller.createNewAd);


router.get('/car', carcontroller.getAllCars);
router.get('/car/status/available', carcontroller.availableCars);
router.get('/car/:id', carcontroller.getSpecificCar);
router.patch('/car/:id/status', updateAdStatusValidator, carcontroller.updateAdStatus);
router.patch('/car/:id/price', updateAdPriceValidator, carcontroller.updateAdPrice);
router.delete('/car/:id', carcontroller.deleteCar);

export default router;
