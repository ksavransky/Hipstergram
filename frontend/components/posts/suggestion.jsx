import React from 'react';


class Suggestion extends React.Component {
	constructor(props){
		super(props);
		this.newFollow = this.newFollow.bind(this);
		this.unFollow = this.unFollow.bind(this);
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
    this.props.requestPosts();
	}

	newFollow(){
		let relationship = {relationship: {
			follower_id: this.props.currentUser.id,
			followee_id: this.props.user.id,
		}};
		this.props.createRelationship(relationship);
    this.props.requestPosts();
	}

	render(){
    const user = this.props.user;
    const currentUser = this.props.currentUser;

		let following = false;
		currentUser.followees.forEach(obj => {
			if(obj.id === user.id){
				following = true;
			}
		});

    let show;
    if (currentUser.id !== user.id && following === false){
       show = (
        <div className="suggestion-show">
            <img src={user.prof_image_url}
              className="suggestion-user-photo-image"/>

            <div className="show-user-names">
              <div className="suggestion-show-username">
                  {user.username}
              </div>
              <div className="suggestion-user-fullname">
                  {user.fullname}
              </div>
            </div>

            <div className="suggestion-show-follow-button">
              <div className="suggestion-follow-button"
      					onClick={this.newFollow}>
      					Follow
      				</div>
            </div>
        </div>
      );
    }

		return (
      <div>
        {show}
      </div>
		);
	}
}

export default Suggestion;
