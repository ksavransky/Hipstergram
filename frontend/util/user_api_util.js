export const fetchUsers = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/users',
    success
  });
};

export const fetchUser = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    success
  });
};
