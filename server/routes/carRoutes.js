import { Router } from 'express';
import carcontroller from '../controllers/car';

const router = Router();

router.post('/car', carcontroller.createNewAd);


export default router;
