# Hipstergram

###[Link to Hipstergram](http://thehipstergram.herokuapp.com)

*Welcome to Hipstergram! Hipstergram is a photo sharing web application inspired by Instagram, but tailored to Hipster sensibilities. It was built using Ruby on Rails and React.js/Redux.*

![Hipstergram](/app/assets/images/hipstergram.png)


####Hipstergram features:

######Authentication
  * Users must be logged in order to use the web application, including adding posts, commenting on and liking posts, and following other users.

######Posts
  * Users can upload pictures via the navigation bar. The upload form utilizes a Modal gem.
  * Users can view the posts from all other "followed" users, as well as their own posts.
  * Posts are ordered chronologically, with the most recent post on top.
  * Post headers include information about who created the post and the time elapsed since its creation.

######Follows
  * A user can "follow" another user.
    * All posts from followed users are displaced chronologically on the post-feed.
  * A user can "unfollow" a followed user.

######Comments
  * The current user can add a comment to a post.
  * The current user can delete their own comment by hovering over it and clicking on the appearing "X".

######Likes
  * A user can "like" a followed user's post by clicking on the empty mason jar (duh).
  * A user can "unlike" a followed user's post.
  * The total number of "likes" per post is displayed.

######Current User Profile
  * Displays information about the current user, including number of posts, followers, and followees.
  * Displays all the posts a user has created using the Masonry gem. To see the gem in action change the window size and watch the photos in the gallery dynamically adjust positions.
  * Allows current user to update their profile, including uploading a new profile photo and changing their name and "about me".

######Other Users' Profiles
  * Displays information about the user, including number of posts, followers, and followees. Can be accessed by clicking on user in post caption or via the search bar.

######Suggestions
  * Hipstergram features a suggestions feature on the top of the posts index. It recommends that the current user follow other users not yet being followed.

######Search for Users
  * Hipstergram features a search bar. It allows the current user to search for users, view their profiles and follow them. Enjoy!

####Sample Code Snipped:

######Hand-Rolled Users Middleware for Redux Cycles

```javascript
 import { fetchUsers,
           fetchUser,
           createUser,
           refreshUser
         } from '../util/user_api_util'; <br />

  import { requestUsers,
           receiveUser,
           receiveUsers,
           updateUser,
           UserConstants
         } from '../actions/user_actions.js';

  import {requestCurrentUser, receiveCurrentUser} from '../actions/session_actions.js';


  export default ({getState, dispatch}) => next => action => {
   const usersSuccess = data => dispatch(receiveUsers(data));
   const userSuccess = data => dispatch(receiveUser(data));

   const updateCallback = user => {
     dispatch(receiveUser(user));
     dispatch(receiveCurrentUser(user));
   };

   const result = next(action);
   switch(action.type){
     case UserConstants.REQUEST_USERS:
       fetchUsers(usersSuccess);
       break;
     case UserConstants.REQUEST_USER:
       fetchUser(action.id, userSuccess);
       break;
     case UserConstants.UPDATE_USER:
       refreshUser(action.user, updateCallback);
       break;
     default:
       next(action);
   }
   return result;
  };
```
