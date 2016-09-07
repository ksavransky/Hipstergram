import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import PostsReducer from '../reducers/posts_reducer';
import UsersReducer from '../reducers/users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  users: UsersReducer
});

export default RootReducer;
