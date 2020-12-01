import express from 'express';
const router = express.Router();
import { login, getUserProfile, createUser, changeUserProfile, getAllUsers } from '../controller/userController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/login').post(login);
router.route('/').post(createUser).get(protect, admin, getAllUsers);
router.route('/profile').get(protect, getUserProfile).put(protect, changeUserProfile);
export default router;