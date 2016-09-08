import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import PostsMiddleware from '../middleware/posts_middleware';
import UsersMiddleware from '../middleware/users_middleware';
import RelationshipsMiddleware from '../middleware/relationships_middleware.js';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware,
  UsersMiddleware,
  RelationshipsMiddleware
);

export default RootMiddleware;
