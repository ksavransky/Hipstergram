export const PostConstants = {
  REQUEST_POSTS: "REQUEST_POSTS",
  REQUEST_POST: "REQUEST_POST",
  RECEIVE_POSTS: "RECEIVE_POSTS",
  RECEIVE_POST: "RECEIVE_POST",
  REMOVE_POST: "REMOVE_POST",
  CREATE_POST: "CREATE_POST",
  UPDATE_POST: "UPDATE_POST",
  DESTROY_POST: "DESTROY_POST",
  POST_ERROR: "POST_ERROR"
};

export const requestPosts = () => ({
  type: PostConstants.REQUEST_POSTS
});

export const requestPost = id => ({
  type: PostConstants.REQUEST_POST,
  id
});

export const receivePosts = posts => ({
  type: PostConstants.RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: PostConstants.RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: PostConstants.REMOVE_POST,
  post
});

export const createPost = post => ({
  type: PostConstants.CREATE_POST,
  post
});

export const updatePost = post => ({
  type: PostConstants.UPDATE_POST,
  post
});

export const destroyPost = post => ({
  type: PostConstants.DESTROY_POST,
  post
});

export const postError = error => ({
  type: PostConstants.POST_ERROR,
  error
});
