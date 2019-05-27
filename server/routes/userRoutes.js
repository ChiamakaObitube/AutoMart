import { Router } from 'express';
import usercontroller from '../controllers/user';

const router = Router();

router.post('/auth/signup', usercontroller.postNewUser);
router.post('/auth/signin', usercontroller.loginUser);
router.get('/users', usercontroller.getAllUsers);


export default router;
