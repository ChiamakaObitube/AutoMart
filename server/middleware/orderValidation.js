class OrderValidators {
  static postOrderValidator(req, res, next) {
    const {
      status,
      priceOffered,
    } = req.body;

    if (!priceOffered) {
      return res.status(400)
        .send({
          status: 400,
          message: 'order price offered is required',
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
      priceOffered,
    } = req.body;
    if (!priceOffered) {
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
