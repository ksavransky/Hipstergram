import { fetchPosts,
         fetchPost
       } from '../util/post_api_util';

import { requestPosts,
         receivePost,
         receivePosts,
         PostConstants
       } from '../actions/post_actions.js';


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
   default:
     next(action);
 }
 return result;
};
