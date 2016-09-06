import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import PostsReducer from '../reducers/posts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer
});

export default RootReducer;
