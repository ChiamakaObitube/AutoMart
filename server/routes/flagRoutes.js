import { Router } from 'express';
import flagController from '../controllers/V2/flag';
import flagAdValidator from '../middleware/flagValidation';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/flag', Authentication, flagAdValidator, flagController.flagAd);
// router.get('/flag', Authentication, flagController.getAllFlags);
// router.get('/flag/:id', Authentication, flagController.getFlag);


export default router;
