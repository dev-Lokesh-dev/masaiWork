import User from '../models/User.js';
import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, user: req.params.userId });
  res.json(post);
};

export const createComment = async (req, res) => {
  const comment = await Comment.create({ ...req.body, post: req.params.postId });
  res.json(comment);
};

export const getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.params.userId }).populate('user');
  res.json(posts);
};

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('post');
  res.json(comments);
};
