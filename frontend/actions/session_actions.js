export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  UPDATE_USER: "UPDATE_USER",
  REQUEST_CURRENT_USER: "REQUEST_CURRENT_USER"
};

export const requestCurrentUser = () => ({
  type: SessionConstants.REQUEST_CURRENT_USER
});

export const updateUser = user => ({
  type: SessionConstants.UPDATE_USER,
  user
});

export const signup = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
