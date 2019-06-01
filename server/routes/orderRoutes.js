import { Router } from 'express';
import orderController from '../controllers/order';
import { postOrderValidator, updateOrderPriceValidator } from '../middleware/orderValidation';


const router = Router();

router.post('/order', postOrderValidator, orderController.postOrder);
router.get('/order', orderController.getAllOrders);
router.get('/order/:id', orderController.getOrder);
router.patch('/order/:id/price', updateOrderPriceValidator, orderController.updatePurchasePriceOrder);

export default router;
