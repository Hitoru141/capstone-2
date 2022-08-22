import express from 'express';
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from '../controllers/video-controller.js';
import { verifyToken } from '../verifyToken.js';

const router = express();

router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);

export default router;
