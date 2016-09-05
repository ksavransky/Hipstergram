export const makeComment = function(comment){
  console.trace();
  debugger;
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  });
};

export const destroyComment = function(comment, success){
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
    success
  });
};
