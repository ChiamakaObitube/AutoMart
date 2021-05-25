class flagValidators {
  static flagAdValidator(req, res, next) {
    const {
      reason, description,

    } = req.body;

    if (!reason) {
      return res.status(400)
        .send({
          status: 400,
          message: 'reason is required',
        });
    }

    if (typeof reason !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'reason must be a string',
        });
    }
    if (!description) {
      return res.status(400)
        .send({
          status: 400,
          message: 'description is required',
        });
    }
    if (typeof description !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'description must be a string',
        });
    }
    next();
  }
}
const {
  flagAdValidator,
} = flagValidators;
export default flagAdValidator;
