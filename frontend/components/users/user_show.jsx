import React from 'react';

const UserShow = function({user, userId, requestUser}) {
  return(
    <div className="user-show">
      In user profile
      {user.username}
    </div>
  );
};

export default UserShow;
