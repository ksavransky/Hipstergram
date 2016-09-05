import { makeComment
       } from '../util/comment_api_util.js';

import {
        receiveComment,
         CommentConstants
       } from '../actions/comment_actions.js';


export default ({getState, dispatch}) => next => action => {

 switch(action.type){
    case CommentConstants.CREATE_COMMENT:
    console.log("in comment middleware - create comment");
     makeComment(action.comment);
     return next(action);
     break;
   default:
   console.log("in comment middleware - default");
    return next(action);
    break;
 }
};
