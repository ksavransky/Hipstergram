export const fetchPosts = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    success
  });
};

export const fetchPost = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
    success
  });
};

// not sure I need error param here; see dif between benchbnb and todo; check poke
export const createPost = function(post, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: post,
    success,
    error
  });
};

export const updatePost = function(post, success){
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {post},
    success
  });
};

export const destroyPost = function(post, success){
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`,
    success
  });
};
