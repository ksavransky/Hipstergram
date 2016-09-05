import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import PostsReducer from '../reducers/posts_reducer';
import CommentsReducer from '../reducers/comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default RootReducer;
