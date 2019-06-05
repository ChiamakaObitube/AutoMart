import { Router } from 'express';
import orderController from '../controllers/order';
import { postOrderValidator, updateOrderPriceValidator } from '../middleware/orderValidation';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/order', Authentication, postOrderValidator, orderController.postOrder);
router.get('/order', Authentication, orderController.getAllOrders);
router.get('/order/:id', Authentication, orderController.getOrder);
router.patch('/order/:id/price', Authentication, updateOrderPriceValidator, orderController.updatePurchasePriceOrder);

export default router;
