import express from 'express';
import { resgistrationController } from '../controllers/resgistrationController.js';

const router = express.Router();

router.post('/', resgistrationController);

export default router;