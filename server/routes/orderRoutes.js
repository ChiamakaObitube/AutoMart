import { Router } from 'express';
import orderController from '../controllers/order';

const router = Router();

router.post('/order', orderController.postOrder);
router.get('/order', orderController.getAllOrders);
router.get('/order/:id', orderController.getOrder);
router.patch('/order/:id/price', orderController.updatePurchasePriceOrder);

export default router;
