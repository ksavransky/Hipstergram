import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = function(state = {}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USERS:
      return action.users;
    case UserConstants.RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      return merge({}, state, newUser);
    default:
      return state;
  }
};

export default UsersReducer;
