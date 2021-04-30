import express from 'express';
import { getuserController } from '../controllers/getuserController.js';

const router = express.Router();

router.post('/', getuserController);

export default router;