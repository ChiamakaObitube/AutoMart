import { Router } from 'express';
import userController from '../controllers/V2/user';
import { signupValidator, signinValidator } from '../middleware/userValidation';
import Authentication from '../middleware/authToken';

const router = Router();

 router.post('/auth/signup', signupValidator, userController.userSignup);
//  router.post('/auth/signin', signinValidator, userController.loginUser);

// router.get('/users', Authentication, userController.getAllUsers);
// router.delete('/users/:email', Authentication, userController.deleteUser);


export default router;
