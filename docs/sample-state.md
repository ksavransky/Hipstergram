{
  user:
    1:
    { id: 1,
      username: "joe22",
      full_name: "Joe Smith",
      password_digest: "asdfasdf241241",
      session_token: "asdr14534rtsafasg",
      profile_text: "Joe is the best!"
      prof_image_url: "http://someimage.etc"  
    },
  posts:
  {
    1:
     {
       id: 1,
       image_url: "http://someimage.etc",
       post_date: "a date object",
       user_id: 2
     },
     2:
      {
        id: 2,
        image_url: "http://someimage.etc",
        post_date: "a date object",
        user_id: 4
      }
  },
  relationships:
  {
    1:
    {
      id: 1,
      follower_id: 1,
      followed_id: 4,
    }
  },
  likes:
  {
    1:
    {
      id: 1,
      post_id: 1,
      user_id: 2
    }
  },
  comments:
  {
    1:
    {
      id: 1,
      body: "best post ever",
      user_id: 2,
      post_id: 3,
      date: "a date"    
    }
  }
}
