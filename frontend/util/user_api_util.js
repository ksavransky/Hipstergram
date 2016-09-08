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
