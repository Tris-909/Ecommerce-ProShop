import express from 'express';
const router = express.Router();
import { login, getUserProfile, createUser, changeUserProfile } from '../controller/userController.js';
import { protect } from '../middlewares/auth.js';

router.route('/login').post(login);
router.route('/').post(createUser);
router.route('/profile').get(protect, getUserProfile).put(protect, changeUserProfile);
export default router;