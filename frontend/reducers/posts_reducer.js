import { PostConstants } from '../actions/post_actions';
import { CommentConstants } from '../actions/comment_actions.js';
import { LikeConstants } from '../actions/like_actions.js';
import merge from 'lodash/merge';

const PostsReducer = function(state = {}, action){
  switch(action.type){
    case PostConstants.RECEIVE_POSTS:
      return action.posts;
    case PostConstants.RECEIVE_POST:
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case CommentConstants.REMOVE_COMMENT:
      const newState = merge({}, state);
      let post = newState[action.id.post_id];
      let comments = post.comments;
      let idx = comments.findIndex((e)=>{
        return e.id === action.id.id;
      });
      if (idx !== -1){
        post.comments.splice(idx, 1);
      }
      return newState;
    case LikeConstants.REMOVE_LIKE:
      const newLikeState = merge({}, state);
      return newLikeState;
    default:
      return state;
  }
};

export default PostsReducer;
