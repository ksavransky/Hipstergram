import { fetchUsers,
         fetchUser,
         createUser
       } from '../util/user_api_util';

import { requestUsers,
         receiveUser,
         receiveUsers,
         UserConstants
       } from '../actions/user_actions.js';



export default ({getState, dispatch}) => next => action => {
 const usersSuccess = data => dispatch(receiveUsers(data));
 const userSuccess = data => dispatch(receiveUser(data));


 const result = next(action);
 switch(action.type){
   case UserConstants.REQUEST_USERS:
     fetchUsers(usersSuccess);
     break;
   case UserConstants.REQUEST_USER:
     fetchUser(action.id, userSuccess);
     break;
   default:
     next(action);
 }
 return result;
};
