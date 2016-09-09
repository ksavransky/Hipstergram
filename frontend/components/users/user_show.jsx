import React from 'react';
import UserPhotos from './user_photos.jsx';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import UserProfileContainer from '../user_profile/user_profile_container.js';


class UserShow extends React.Component {
	constructor(props){
		super(props);
		this.newFollow = this.newFollow.bind(this);
		this.unFollow = this.unFollow.bind(this);

		this.state = {modalOpen: false};
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
		this.style = {
				overlay : {
					position        : 'fixed',
					top             : 0,
					left            : 0,
					right           : 0,
					bottom          : 0,
					backgroundColor : 'rgba(255, 255, 255, 0.75)',
				},
				content : {
					display            : "block",
					width              : "500px",
					height             : "530px",
					margin             : "auto",
					marginTop          : "20px",
					marginLeft         : "373px",
					position           : "absolute",
					border             : '2px solid grey',
					borderRadius       : "10px",
					backgroundColor    : "#fafafa",
					fontFamily         : "proxima-nova, Helvetica Neue, Arial",
			}
		};

  }

	closeModal(){
		this.setState({ modalOpen: false });
	}

	openModal(){
		this.setState({ modalOpen: true });
	}

	unFollow(){
		let resultId;
		this.props.currentUser.followee_relationships.forEach(obj => {
			if(obj.followee_id === this.props.user.id &&
				obj.follower_id === this.props.currentUser.id){
				resultId = obj.id;
			}
		});

		let relationship = {
			id: resultId,
			follower_id: this.props.currentUser.id,
			followee_id: this.props.user.id
		};
		this.props.destroyRelationship(relationship);
	}

	newFollow(){
		let relationship = {relationship: {
			follower_id: this.props.currentUser.id,
			followee_id: this.props.user.id,
		}};
		this.props.createRelationship(relationship);
	}

	render(){
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const posts = user.posts;
    const postKeys = Object.keys(posts);

		let following = false;
		currentUser.followees.forEach(obj => {
			if(obj.id === user.id){
				following = true;
			}
		});

		let changeButton;
		if(currentUser.id !== user.id){
			if (following === false){
				changeButton = <div className="follow-button"
					onClick={this.newFollow}>
					Follow
				</div>;
			} else {
				changeButton = <div className="unfollow-button"
					onClick={this.unFollow}>
					Following
				</div>;
			}
		} else {
			changeButton = <div onClick={this.openModal}
				className="update-profile-button">
				Update Profile
			</div>;
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
										{changeButton}
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

					<Modal
						 isOpen={this.state.modalOpen}
						 onRequestClose={this.closeModal}
						 style={this.style}
						 >
							 <UserProfileContainer/>
					 </Modal>
      </div>
		);
	}

}

export default UserShow;
