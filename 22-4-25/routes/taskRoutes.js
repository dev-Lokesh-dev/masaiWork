import express from 'express';
import { postTask, getTasks, patchTask } from '../controllers/taskController.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.use(authenticate);

router.post('/', postTask);
router.get('/', getTasks);
router.patch('/:id', patchTask);

export default router;
