import { Router } from 'express';
import userController from '../controllers/V2/user';
import { /* signupValidator, signinValidator, */ makeAdminValidator } from '../middleware/userValidation';
import Authentication from '../middleware/authToken';

const router = Router();

router.post('/auth/signup', userController.userSignup);
router.post('/auth/signin', userController.loginUser);
router.patch('/users/admin', Authentication, makeAdminValidator, userController.makeAdmin);
router.get('/users', Authentication, userController.getAllUsers);
router.get('/users/:email', Authentication, userController.getSpecificUser);
router.delete('/users/:email', Authentication, userController.deleteSpecificUser);


export default router;
