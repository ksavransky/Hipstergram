import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import PostsMiddleware from '../middleware/posts_middleware';
import CommentsMiddleware from '../middleware/comments_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware
);

export default RootMiddleware;
