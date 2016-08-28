## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **LoginForm**
  * **SignupForm**
  * **PostsIndex**
    * Navbar
      * SearchBar for users to view their profile (bonus? or suggestions comp)
      * Link to UploadPostForm
        * **UploadPostForm**
      * UserProfileLink
    * PostFeed
      * Suggestions Component (recommends people to follow) (bonus? or searchbar comp)
      * PostFeedItem
        * HeaderBar
          * UserPhoto
          * UserInfo
          * DateStamp
        * Image
        * LikesCounter
        * CommentDisplay
        * InteractiveBar
          * LikesButton
          * AddCommentForm
  * **UserProfile**
    * ProfileHeader
      * ProfilePhoto
      * Username
      * FollowingInformation (if looking at another user's profile can choose to follow/unfollow; if looking at own shows you stats re followers/following)
      * Fullname
    * UserPosts (Comp that shows a gallery of your recent posts)
      * Posts
