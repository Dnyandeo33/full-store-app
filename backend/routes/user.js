import express from 'express';
import userController from '../controllers/user.js';

const { register, login, logout } = userController;
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;