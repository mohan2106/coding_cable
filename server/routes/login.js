import express from 'express';
import { loginController } from '../controllers/loginController.js';
import { createToken } from '../middlewares/verifyToken.js'

const router = express.Router();

router.post('/', loginController, createToken);

export default router;