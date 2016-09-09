import { fetchUsers,
         fetchUser,
         createUser,
         refreshUser
       } from '../util/user_api_util';

import { requestUsers,
         receiveUser,
         receiveUsers,
         updateUser,
         UserConstants
       } from '../actions/user_actions.js';

import {requestCurrentUser, receiveCurrentUser} from '../actions/session_actions.js';


export default ({getState, dispatch}) => next => action => {
 const usersSuccess = data => dispatch(receiveUsers(data));
 const userSuccess = data => dispatch(receiveUser(data));

 const updateCallback = user => {
   dispatch(requestUsers());
   dispatch(receiveCurrentUser(user));
   dispatch(requestCurrentUser());
 };


 const result = next(action);
 switch(action.type){
   case UserConstants.REQUEST_USERS:
     fetchUsers(usersSuccess);
     break;
   case UserConstants.REQUEST_USER:
     fetchUser(action.id, userSuccess);
     break;
   case UserConstants.UPDATE_USER:
     refreshUser(action.user, updateCallback);
     break;
   default:
     next(action);
 }
 return result;
};
