import { Router } from 'express';
import ordercontroller from '../controllers/order';

const router = Router();

router.post('/order', ordercontroller.postOrder);
router.get('/order', ordercontroller.getAllOrders);

export default router;
