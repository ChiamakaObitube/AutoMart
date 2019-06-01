import { Router } from 'express';
import userController from '../controllers/user';
import { signupValidator, signinValidator } from '../middleware/userValidation';

const router = Router();

router.post('/auth/signup', signupValidator, userController.postNewUser);
router.post('/auth/signin', signinValidator, userController.loginUser);
router.get('/users', userController.getAllUsers);


export default router;
