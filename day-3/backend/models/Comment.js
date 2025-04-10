import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
