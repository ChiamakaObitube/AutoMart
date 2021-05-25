class OrderValidators {
  static postOrderValidator(req, res, next) {
    const {
      status,
      price,
    } = req.body;

    if (!price) {
      return res.status(400)
        .send({
          status: 400,
          message: 'order price offered is required',
          error,
        });
    }

    if (typeof price !== 'number') {
      return res.status(400)
        .json({
          status: 400,
          message: 'purchase order price offered must be a number',
          error,
        });
    }

    if (status !== 'pending') {
      return res.status(400)
        .send({
          status: 400,
          message: 'order status must be pending',
          error,
        });
    }
    next();
  }

  static updateOrderPriceValidator(req, res, next) {
    const {
      price,
    } = req.body;
    if (!price) {
      return res.status(400)
        .send({
          status: 400,
          error: 'price is required',
        });
    }
    next();
  }
}
const {
  postOrderValidator, updateOrderPriceValidator,
} = OrderValidators;
export { postOrderValidator, updateOrderPriceValidator };
