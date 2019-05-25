import UserModel from '../models/usermodel';

class userController {
  static postNewUser(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const signUpInfo = UserModel.signup(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Account created successfully',
      data: signUpInfo
    });
  }
}

export default userController;
