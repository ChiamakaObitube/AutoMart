class OrderValidators {
  static postOrderValidator(req, res, next) {
    const {
      status,
      priceoffered,
    } = req.body;

    if (!priceoffered) {
      return res.status(400)
        .send({
          status: 400,
          message: 'order price offered is required',
        });
    }

    if (typeof priceoffered !== 'number') {
      return res.status(400)
        .json({
          status: 400,
          message: 'purchase order price offered must be a number',
        });
    }

    if (status !== 'pending') {
      return res.status(400)
        .send({
          status: 400,
          message: 'order status must be pending',
        });
    }
    next();
  }

  static updateOrderPriceValidator(req, res, next) {
    const {
      priceoffered,
    } = req.body;
    if (!priceoffered) {
      return res.status(400)
        .send({
          status: 400,
          message: 'order price offered is required',
        });
    }
    next();
  }
}
const {
  postOrderValidator, updateOrderPriceValidator,
} = OrderValidators;
export { postOrderValidator, updateOrderPriceValidator };
