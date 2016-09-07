import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UserProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			id: this.props.currentUser.id
		};
  }

	render(){
		return (
			<div className="upload-form-container">
        <h2>Profile!!!!!</h2>
				{this.props.currentUser.username}
			</div>
		);
	}

}

export default withRouter(UserProfile);
