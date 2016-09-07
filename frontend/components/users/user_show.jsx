import React from 'react';
import UserPhotos from './user_photos.jsx';


class UserShow extends React.Component {
	constructor(props){
		super(props);

  }

	render(){
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const posts = user.posts;
    const postKeys = Object.keys(posts);

		return (
      <div className="user-show">
        <div className="user-show-photo">
          <img src={user.prof_image_url}
            className="user-show-photo-image"
            />;
        </div>

        <div className="user-show-user-info">
          <div className="user-show-username">
            {user.username}
          </div>
          <div className="user-show-follow-button">
          </div>
          <div className="user-show-fullname">
            Full name: {user.fullname}
          </div>
          <div className="user-show-profile-text">
            About me: {user.profile_text}
          </div>
        </div>

        <div className="user-show-relationships">
          <div className="user-show-posts-count">
            Posts: {user.posts.length}
          </div>
          <div className="user-show-followers-count">
            Followers: {user.followers.length}
          </div>
          <div className="user-show-following-count">
            Following: {user.followees.length}
          </div>
        </div>

        <ul className="user-show-posts">
          {postKeys.map(key => <UserPhotos
            key={key}
            post={posts[key]}
            />)}
        </ul>


      </div>
		);
	}

}

export default UserShow;
