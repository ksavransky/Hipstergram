export const fetchUsers = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/users',
    success
  });
};

export const fetchUser = function(user, success){
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`,
    success
  });
};

export const refreshUser = function(user, success){
  $.ajax({
    method: 'PUT',
    url: `api/users/${user.id}`,
    data: user,
    success
  });
};
