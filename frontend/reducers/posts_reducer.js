import { PostConstants } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = function(state = {}, action){
  switch(action.type){
    case PostConstants.RECEIVE_POSTS:
      return action.posts;
    case PostConstants.RECEIVE_POST:
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    default:
      return state;
  }
};

export default PostsReducer;
