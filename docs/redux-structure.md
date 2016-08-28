# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the success callback. This will have to get all posts from only users that the current user is following. Also will need to sort by most recent posted on feed (not really part of the cycle, just a note).

* `createPost`
  0. invoked from form to create new posts when post button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from the feed on button `onClick` on a post
  0. `GET /api/notebooks/:id` is called.
  0. `receiveSingleNotebook` is set as the success callback.

* `updatePost`
  0. invoked from view of single post - `onSubmit`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the success callback.

* `destroyPost`
  0. invoked from delete post button `onClick` when viewing single post
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the success callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. The `Post` reducer updates `posts` in the application's state.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. The `Post` reducer updates `posts[id]` in the application's state.

* `removeNotebook`
  0. invoked from an API callback.
  0. The `Post` reducer removes `posts[id]` from the application's state.

## Comments Cycles

### Comments API Request Actions

* Note: on Insta cannot update or view individual comment; can only post and delete

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the success callback. This will have to get all comments for each post in state.

* `createComment`
  0. invoked from form to create new comment when post button `onClick`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the success callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. The `Comment` reducer updates `comments` in the application's state.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. The `Comment` reducer updates `comments[id]` in the application's state.

* `removeComment`
  0. invoked from an API callback.
  0. The `Comment` reducer removes `comments[id]` from the application's state.

## Likes Cycles

### Likes API Request Actions

* `fetchAllLikes`
  0. invoked from `LikesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/likes` is called.
  0. `receiveAllLikes` is set as the success callback. This will have to get all likes for each post in state.

* `createLike`
  0. invoked from form to create new like when post button `onClick`
  0. `POST /api/likes` is called.
  0. `receiveSingleLike` is set as the callback.

* `destroyLike`
  0. invoked from delete when like button `onClick` when already liked status
  0. `DELETE /api/likes/:id` is called.
  0. `removeLike` is set as the success callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. The `Like` reducer updates `likes` in the application's state.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. The `Like` reducer updates `likes[id]` in the application's state.

* `removeLike`
  0. invoked from an API callback.
  0. The `Like` reducer removes `likes[id]` from the application's state.


## Relationships Cycles

### Relationships API Request Actions

* `fetchAllRelationships`
  0. invoked from `RelationshipsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/relationships` is called.
  0. `receiveAllRelationships` is set as the success callback.

* `createRelationship`
  0. invoked from suggestions form or when viewing a profile of a user not currently following to create new follow when follow button `onClick`
  0. `POST /api/relationships` is called.
  0. `receiveSingleRelationship` is set as the callback.

* `destroyRelationship`
  0. invoked from delete when unfollow button `onClick` on viewing another users profile when already followed status
  0. `DELETE /api/relationships/:id` is called.
  0. `removeRelationship` is set as the success callback.

### Relationships API Response Actions

* `receiveAllRelationships`
  0. invoked from an API callback.
  0. The `Relationship` reducer updates `relationships` in the application's state.

* `receiveSingleRelationship`
  0. invoked from an API callback.
  0. The `Relationship` reducer updates `relationships[id]` in the application's state.

* `removeRelationship`
  0. invoked from an API callback.
  0. The `Relationship` reducer removes `relationships[id]` from the application's state.
