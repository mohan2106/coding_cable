import express from 'express';
import { uploadImageController } from '../controllers/uploadController.js';
import Multer from 'multer';

const router = express.Router();
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
  });
router.post('/image',multer.single('file'), uploadImageController);

export default router;