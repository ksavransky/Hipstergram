import React from 'react';
import UserPhotos from './user_photos.jsx';
import Masonry from 'react-masonry-component';


class UserShow extends React.Component {
	constructor(props){
		super(props);

  }

	render(){
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const posts = user.posts;
    const postKeys = Object.keys(posts);

		console.log(currentUser);

		let following = false;
		currentUser.followees.forEach(obj => {
			if(obj.id === user.id){
				following = true;
			}
		});

		let followButton;
		if(currentUser.id !== user.id){
			if (following === false){
				followButton = <div className="follow-button">
					follow
				</div>;
			} else {
				followButton = <div className="follow-button">
					unfollow
				</div>;
			}
		}

		return (
      <div className="user-show">

        <div className="user-show-header">
					<img src={user.prof_image_url}
						className="user-show-photo-image"
						/>

		        <div className="user-show-user-info">

							<div className="user-show-namebutton">
				          <div className="user-show-username">
				            {user.username}
				          </div>
				          <div className="user-show-follow-button">
										{followButton}
				          </div>
							</div>

			        <div className="user-show-relationships">
			          <div className="user-show-posts-count">
			            <strong>{user.posts.length}</strong>
										<div className="rel-words">posts</div>
			          </div>
			          <div className="user-show-followers-count">
			             <strong>{user.followers.length}</strong>
										 <div className="rel-words">followers</div>
			          </div>
			          <div className="user-show-following-count">
			            <strong>{user.followees.length}</strong>
										<div className="rel-words">followees</div>
			          </div>
			        </div>

							<div className="user-show-fullname">
								{user.fullname}
							</div>
							<div className="user-show-profile-text">
								<div className="about-me">About me: </div>
								<div className="profile-text">{user.profile_text}</div>
							</div>
					</div>

				</div>

				<Masonry className='masonry-container'
					elementType={'ul'}
					options={{fitWidth: true}}>
		          {postKeys.map(key => <UserPhotos
		            key={key}
		            post={posts[key]}
		            />)}
				  </Masonry>
      </div>
		);
	}

}

export default UserShow;
