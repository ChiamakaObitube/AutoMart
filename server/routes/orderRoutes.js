import { Router } from 'express';
import orderController from '../controllers/V2/order';
import { postOrderValidator, updateOrderPriceValidator } from '../middleware/orderValidation';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/order', Authentication, postOrderValidator, orderController.postOrder);
router.get('/order', Authentication, orderController.getAllOrders);
router.get('/order/:id', Authentication, orderController.getSpecificOrder);
router.patch('/order/:id/price', Authentication, updateOrderPriceValidator, orderController.updatePurchaseOrderPrice);

export default router;
