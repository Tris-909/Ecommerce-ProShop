import express from 'express';
const router = express.Router();
import {
    SendForgotPasswordEmail,
    MatchEmailByToken,
    UpdatePasswordViaEmail
} from '../controller/userController.js';

router.route('/forgotpassword').post(SendForgotPasswordEmail);
router.route('/updatePasswordViaEmail').post(UpdatePasswordViaEmail);
router.route('/:resetPasswordToken').get(MatchEmailByToken);
export default router;