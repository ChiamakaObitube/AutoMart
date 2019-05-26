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

  static getAllOrders(req, res) {
    const orders = OrderModel.getOrders();
    if (orders.length === 0 || !orders) {
      return res.status(400).json({
        status: 400,
        message: 'you have not made any order yet',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'all orders',
      data: orders
    });
  }

  static getOrder(req, res) {
    const order = OrderModel.viewOrder(Number(req.params.id));
    if (!order) {
      return res.status(404).json({
        status: 404,
        message: 'purchase order does not exist'
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'purchase order found',
      data: order
    });
  }
}
export default orderController;
