import express from 'express';
const router = express.Router();
import { login } from '../controller/userController.js';

router.route('/login').post(login);
export default router;