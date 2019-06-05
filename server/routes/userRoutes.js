import { Router } from 'express';
import userController from '../controllers/user';
import { signupValidator, signinValidator } from '../middleware/userValidation';
import Authentication from '../middleware/authToken';

const router = Router();

router.post('/auth/signup', signupValidator, userController.postNewUser);
router.post('/auth/signin', signinValidator, userController.loginUser);
router.get('/users', Authentication, userController.getAllUsers);


export default router;
