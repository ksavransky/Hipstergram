export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
  DESTROY_COMMENT: "DESTROY_COMMENT",
  RECEIVE_COMMENT: "RECEIVE_COMMENT"
};


export const createComment = comment => {
  console.log("in action");
   return({
   type: CommentConstants.CREATE_COMMENT,
   comment
 });
};


export const destroyCommment = comment => ({
  type: CommentConstants.DESTROY_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: CommentConstants.RECEIVE_COMMENT,
  comment
});
