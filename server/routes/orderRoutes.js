import { Router } from 'express';
import ordercontroller from '../controllers/order';

const router = Router();

router.post('/order', ordercontroller.postOrder);
router.get('/order', ordercontroller.getAllOrders);
router.get('/order/:id', ordercontroller.getOrder);

export default router;
