import express from 'express';
import {
  createUser,
  createPost,
  createComment,
  getUserPosts,
  getPostComments
} from '../controllers/blogController.js';

const router = express.Router();

router.post('/users', createUser);
router.post('/users/:userId/posts', createPost);
router.post('/posts/:postId/comments', createComment);
router.get('/users/:userId/posts', getUserPosts);
router.get('/posts/:postId/comments', getPostComments);

export default router;
