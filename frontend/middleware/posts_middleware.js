import { fetchPosts,
         fetchPost,
         createPost
       } from '../util/post_api_util';

import { requestPosts,
         receivePost,
         receivePosts,
         PostConstants
       } from '../actions/post_actions.js';

import { makeComment
      } from '../util/comment_api_util.js';

import {
       receiveComment,
        CommentConstants
      } from '../actions/comment_actions.js';


export default ({getState, dispatch}) => next => action => {
 const postsSuccess = data => dispatch(receivePosts(data));
 const postSuccess = data => dispatch(receivePost(data));
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
   default:
     next(action);
 }
 return result;
};
