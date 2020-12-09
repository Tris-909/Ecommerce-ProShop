import express from 'express';
const router = express.Router();
import { 
    login, 
    getUserProfile, 
    createUser, 
    changeUserProfile, 
    getAllUsers,
    deleteUserAdmin,
    getSingleUserAdmin,
    updateSingleUserAdmin
} from '../controller/userController.js';
import { protect } from '../middlewares/auth.js';
import { admin } from '../middlewares/admin.js';

router.route('/delete/:id').delete(protect, admin, deleteUserAdmin);
router.route('/login').post(login);
router.route('/profile').get(protect, getUserProfile).put(protect, changeUserProfile);
router.route('/:id').get(protect, admin, getSingleUserAdmin);
router.route('/:id').put(protect, admin, updateSingleUserAdmin);
router.route('/').post(createUser).get(protect, admin, getAllUsers);


export default router;