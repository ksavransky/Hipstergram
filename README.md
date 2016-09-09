# Hipstergram

###[Link to Hipstergram](http://thehipstergram.herokuapp.com)

*Welcome to Hipstergram! Hipstergram is a photo sharing web application inspired by Instagram, but tailored to Hipster sensibilities. It was built using Ruby on Rails and React.js,/Redux.*

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

######Other Users Profile
  * Displays information about the user, including number of posts, followers, and followees. Can be accessed by clicking on user in post caption or via the search bar.

######Suggestions
  * Hipstergram features a suggestions feature on the top of the posts index. It recommends that the current user follow other users not yet being followed.

######Search for Users
  * Hipstergram features a search bar. It allows the current user to search for users, view their profiles and follow them. Enjoy!
