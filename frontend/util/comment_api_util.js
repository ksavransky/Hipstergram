export const makeComment = function(comment, success){
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment,
    success
  });
};

export const destroyComment = function(comment, success){
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
    success
  });
};
