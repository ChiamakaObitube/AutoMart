
class CarValidators {
  static postAdValidator(req, res, next) {
    const {
      manufacturer,
      model,
      price,
      state,
      status,
      imageUrl,
      bodyType,

    } = req.body;

    if (!manufacturer) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car manufacturer is required',
        });
    }

    if (typeof manufacturer !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car manufacturer must be a string',
        });
    }
    if (!model) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car model is required',
        });
    }

    if (typeof model !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car model must be a string',
        });
    }

    if (!price) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car price is required',
        });
    }

    if (!state) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car state is required',
        });
    }
    if (typeof state !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car state must be a string',
        });
    }
    if (!status) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car status is required',
        });
    }
    if (typeof status !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car status must be a string',
        });
    }
    if (!imageUrl) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car image is required',
        });
    }

    if (typeof imageUrl !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car image url must be a string',
        });
    }
    if (!bodyType) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car body type is required',
        });
    }

    if (typeof bodyType !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car body type must be a string',
        });
    }

    next();
  }

  static updateAdPriceValidator(req, res, next) {
    const {
      price,
    } = req.body;
    if (!price) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car price is required',
        });
    }
    if (typeof price !== 'number') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car price must be a number',
        });
    }
    next();
  }

  static updateAdStatusValidator(req, res, next) {
    const {
      status,
    } = req.body;
    if (!status) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car status is required',
        });
    }
    if (typeof status !== 'string') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car status must be a string',
        });
    }
    next();
  }

  static getAvailableCarsWithinPriceRangeValidator(req, res, next) {
    const {
      minPrice,
      maxPrice,
    } = req.body;
    if (!minPrice && !maxPrice) {
      return res.status(400)
        .json({
          status: 400,
          message: 'car max price and min price is required',
        });
    }
    if (typeof minPrice !== 'number') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car min price must be a number',
        });
    }

    if (typeof maxPrice !== 'number') {
      return res.status(400)
        .json({
          status: 400,
          message: 'car max price must be a number',
        });
    }
    next();
  }
}

const {
  postAdValidator, updateAdPriceValidator,
  updateAdStatusValidator, getAvailableCarsWithinPriceRangeValidator,
} = CarValidators;
export {
  postAdValidator,
  updateAdPriceValidator,
  updateAdStatusValidator,
  getAvailableCarsWithinPriceRangeValidator,
};
