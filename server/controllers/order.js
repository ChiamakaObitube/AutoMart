import OrderModel from '../models/ordermodel';


class orderController {
  static postOrder(req, res) {
    if (!req.body.carId && !req.body.buyer && !req.body.status && req.body.price
            && !req.body.priceOffered) {
      return res.status(400).json({
        status: 400,
        error: 'input all fields'
      });
    }
    const newPurchaseOrder = OrderModel.postNewOrder(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Purchase order created successfully.',
      data: newPurchaseOrder
    });
  }
}
export default orderController;
