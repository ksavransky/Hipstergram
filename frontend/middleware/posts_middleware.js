import { fetchPosts,
         fetchPost,
         createPost
       } from '../util/post_api_util';

import { requestPosts,
         receivePost,
         receivePosts,
         PostConstants
       } from '../actions/post_actions.js';

import { makeComment,
        deleteComment
      } from '../util/comment_api_util.js';

import {
        receiveComment,
        destroyCommment,
        removeComment,
        CommentConstants
      } from '../actions/comment_actions.js';


export default ({getState, dispatch}) => next => action => {
 const postsSuccess = data => dispatch(receivePosts(data));
 const postSuccess = data => dispatch(receivePost(data));
 const destroySuccess = comment => dispatch(removeComment(comment));

 const result = next(action);
 switch(action.type){
   case PostConstants.REQUEST_POSTS:
     fetchPosts(postsSuccess);
     break;
   case PostConstants.REQUEST_POST:
     fetchPost(action.id, postSuccess);
     break;
    case PostConstants.CREATE_POST:
     createPost(action.post, postSuccess);
     break;
     case CommentConstants.CREATE_COMMENT:
      makeComment(action.comment, postSuccess);
      return next(action);
     case CommentConstants.DESTROY_COMMENT:
      deleteComment(action.comment, destroySuccess);
      return next(action);
   default:
     next(action);
 }
 return result;
};
