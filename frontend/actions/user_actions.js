export const UserConstants = {
  REQUEST_USERS: "REQUEST_USERS",
  REQUEST_USER: "REQUEST_USER",
  RECEIVE_USERS: "RECEIVE_USERS",
  RECEIVE_USER: "RECEIVE_USER",
  UPDATE_USER: "UPDATE_USER"
};

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS
});

export const requestUser = id => ({
  type: UserConstants.REQUEST_USER,
  id
});

export const receiveUsers = users => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: UserConstants.RECEIVE_USER,
  user
});

export const updateUser = user => ({
  type: UserConstants.UPDATE_USER,
  user
});
