import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import PostsMiddleware from '../middleware/posts_middleware';
import UsersMiddleware from '../middleware/users_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware,
  UsersMiddleware
);

export default RootMiddleware;
