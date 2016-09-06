export const LikeConstants = {
  CREATE_LIKE: "CREATE_LIKE",
  DESTROY_LIKE: "DESTROY_LIKE",
  REMOVE_LIKE: "REMOVE_LIKE"
};


export const createLike = like => {
   return({
   type: LikeConstants.CREATE_LIKE,
   like
 });
};

export const destroyLike = like => ({
  type: LikeConstants.DESTROY_LIKE,
  like
});

export const removeLike = id => ({
  type: LikeConstants.REMOVE_LIKE,
  id
});
