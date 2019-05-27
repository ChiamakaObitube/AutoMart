import UserModel from '../models/usermodel';


class userController {
  static postNewUser(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName
     || !req.body.address || !req.body.password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const userExist = UserModel.getSpecificUser(req.body.email);

    if (userExist) {
      return res.status(400).send({
        status: 400,
        error: 'User already exist',
      });
    }

    const signUpInfo = UserModel.signup(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Account created successfully.',
      data: signUpInfo,
    });
  }

  static loginUser(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        message: 'Enter your Email or Password',
      });
    }

    const userEmailExist = UserModel.getSpecificUser(req.body.email);
    const userPasswordExist = UserModel.getSpecificUser(req.body.email);

    if (!userEmailExist || !userPasswordExist) {
      return res.status(400).send({
        status: 400,
        error: 'Email or Password is incorrect',
      });
    }

    const SigninInfo = req.body;
    return res.status(201).json({
      status: 201,
      message: 'user logged in successfully',
      data: SigninInfo,
    });
  }

  static getAllUsers(req, res) {
    const allUsers = UserModel.getAllUsers();

    // if (allUsers.length === 0) return res.status(404).send('There are no users');
    if (!allUsers) {
      return res.status(404).send({
        status: 404,
        error: 'There are no users',
      });
    }

    return res.status(200).send({
      status: 200,
      data: allUsers,
    });
  }
}

export default userController;
