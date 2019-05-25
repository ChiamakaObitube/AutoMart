import { Router } from 'express';
import ordercontroller from '../controllers/order';

const router = Router();

router.post('/order', ordercontroller.postOrder);


export default router;
