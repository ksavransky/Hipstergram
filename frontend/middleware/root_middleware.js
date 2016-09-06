import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import PostsMiddleware from '../middleware/posts_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware
);

export default RootMiddleware;
