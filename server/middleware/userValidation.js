class UserValidators {
  static signupValidator(req, res, next) {
    const {
      firstName,
      lastName,
      email,
      address,
      password,
    } = req.body;

    // First name validation
    if (firstName === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'First name is required',
        });
    }
    if (firstName === '') {
      return res.status(400)
        .send({
          status: 400,
          message: 'First name field cannot be empty',
        });
    }
    if (typeof firstName !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'First name must be a string',
        });
    }
    if (!/^([A-Za-z]){2,25}$/.test(firstName)) {
      return res.status(400).json({
        status: '400',
        message: 'First name must be an alphabet with length 2 to 25',
      });
    }

    if (lastName === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'Last name is required',
        });
    }
    if (lastName === '') {
      return res.status(400)
        .send({
          status: 400,
          message: 'Last name field cannot be empty',
        });
    }
    if (typeof lastName !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'Last name must be a string',
        });
    }
    if (!/^([A-Za-z-]){2,25}$/.test(lastName)) {
      return res.status(400).json({
        status: '400',
        message: 'Last name must be an alphabet with length 2 to 25',
      });
    }

    if (!email) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your email is required',
        });
    }

    if (typeof email !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'email must be a string',
        });
    }
    if (address === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your address is required',
        });
    }
    if (address === '') {
      return res.status(400)
        .send({
          status: 400,
          message: 'address field cannot be empty',
        });
    }
    if (typeof address !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'address must be a string',
        });
    }
    if (!password) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your password is required',
        });
    }

    if (typeof password !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password must be a string',
        });
    }
    if (password === ' ') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password cannot contain spaces',
        });
    }
    if (password.length < 5 || password.length > 30) {
      return res.status(400).send({
        status: 400,
        message: 'password should be 5 to 30 characters long',
      });
    }
    next();
  }

  static signinValidator(req, res, next) {
    const {
      email,
      password,
    } = req.body;

    if (!email) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your email is required',
        });
    }

    if (typeof email !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'email must be a string',
        });
    }
    const checkEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!checkEmailRegex.test(email)) {
      return res.status(400).send({
        status: 400,
        message: 'email address format is invalid',
      });
    }
    if (!password) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your password is required',
        });
    }

    if (typeof password !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password must be a string',
        });
    }
    if (password === ' ') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password cannot contain spaces',
        });
    }
    if (password.length < 5 || password.length > 30) {
      return res.status(400)
        .send({
          status: 400,
          message: 'password should be 5 to 30 characters long',
        });
    }
    next();
  }
}
const { signupValidator, signinValidator, loginCheck } = UserValidators;

export { signupValidator, signinValidator, loginCheck };
