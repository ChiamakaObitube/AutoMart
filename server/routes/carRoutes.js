import { Router } from 'express';
import carcontroller from '../controllers/car';

const router = Router();

router.post('/car', carcontroller.createNewAd);
router.get('/car', carcontroller.getAllCars);
router.get('/car/:id', carcontroller.getSpecificCar);
router.delete('/car/:id', carcontroller.deleteCar);

export default router;
