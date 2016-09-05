import { CommentConstants } from '../actions/comment_actions.js';
import merge from 'lodash/merge';

const CommentsReducer = function(state = {}, action){
  switch(action.type){
    case CommentConstants.RECEIVE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return merge({}, state, newComment);
    default:
      return state;
  }
};

export default CommentsReducer;
