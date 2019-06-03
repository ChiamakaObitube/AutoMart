import { Router } from 'express';
import flagController from '../controllers/flag';
import flagAdValidator from '../middleware/flagValidation';


const router = Router();

router.post('/flag', flagAdValidator, flagController.flagAd);
router.get('/flag', flagController.getAllFlags);
router.get('/flag/:id', flagController.getFlag);


export default router;
