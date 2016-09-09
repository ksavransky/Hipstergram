import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import {hashHistory} from 'react-router';

import { login, signup, logout, fetchCurrentUser } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
    hashHistory.replace('/posts');
  };

  const fetchCurrentUserSuccess = user => {
    dispatch(receiveCurrentUser(user));
  };

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
      break;
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
      break;
    case SessionConstants.REQUEST_CURRENT_USER:
      fetchCurrentUser(fetchCurrentUserSuccess);
      break;
    default:
      return next(action);
      break;
  }
};
