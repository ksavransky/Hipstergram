export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
  DESTROY_COMMENT: "DESTROY_COMMENT",
  REMOVE_COMMENT: "REMOVE_COMMENT"
};


export const createComment = comment => {
   return({
   type: CommentConstants.CREATE_COMMENT,
   comment
 });
};

export const destroyComment = comment => ({
  type: CommentConstants.DESTROY_COMMENT,
  comment
});

export const removeComment = id => ({
  type: CommentConstants.REMOVE_COMMENT,
  id
});
