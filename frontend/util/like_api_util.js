export const makeLike = function(like, success){
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: like,
    success
  });
};

export const deleteLike = function(like, success){
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${like.id}`,
    success
  });
};
