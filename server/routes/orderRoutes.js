import { Router } from 'express';
import orderController from '../controllers/V2/order';
import { postOrderValidator, updateOrderPriceValidator } from '../middleware/orderValidation';
import Authentication from '../middleware/authToken';


const router = Router();

router.post('/order', Authentication, postOrderValidator, orderController.postOrder);
router.get('/order', Authentication, orderController.getAllOrders);
ft-view-cars-within-price-range-endpoint-db-166735646
router.get('/order/:order-id', Authentication, orderController.getSpecificOrder);
router.patch('/order/:order-id/price', Authentication, updateOrderPriceValidator, orderController.updatePurchaseOrderPrice);

// router.delete('/order/:id', orderController.deleteOrder);

export default router;
