import UserModel from '../models/usermodel';
import Helper from '../middleware/helper';
import users from '../database/user';


class userController {
  static userSignup(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName
     || !req.body.address || !req.body.password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const userExist = UserModel.getSpecificUser(req.body.email);

    if (userExist) {
      return res.status(400).json({
        status: 400,
        error: 'User already exist',
      });
    }

    const hashedPassword = Helper.hashPassword(req.body.password);
    req.body.password = hashedPassword;


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

    const existingUser = users.find(user => user.email === req.body.email);


    if (!existingUser) {
      return res.status(401).json({
        status: 401,
        error: 'Authentication failed',
      });
    }
    const authenticatedUser = Helper.comparePassword(req.body.password, existingUser.password);
    console.log(req.body.password, existingUser.password);
    if (!authenticatedUser) {
      return res.status(401).json({
        status: 401,
        error: 'Authentication failed',
      });
    }

    const existingUserDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    const token = Helper.generateToken(existingUserDetails);

    return res.status(200).json({
      status: 200,
      message: 'user logged in successfully',
      token,
    });
  }

  static getAllUsers(req, res) {
    const allUsers = UserModel.getAllUsers();

    // if (allUsers.length === 0) return res.status(404).send('There are no users');
    if (!allUsers) {
      return res.status(404).json({
        status: 404,
        error: 'There are no users',
      });
    }

    return res.status(200).json({
      status: 200,
      data: allUsers,
    });
  }
}

export default userController;
