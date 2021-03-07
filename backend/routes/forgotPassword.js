import express from 'express';
const router = express.Router();
import {
    MatchEmailByToken,
    UpdatePasswordViaEmail
} from '../controller/userController.js';

router.route('/updatePasswordViaEmail').post(UpdatePasswordViaEmail);
router.route('/:resetPasswordToken').get(MatchEmailByToken);
export default router;