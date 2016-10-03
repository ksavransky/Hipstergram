import React from 'react';

class UserProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			id: this.props.currentUser.id,
      prof_image_url: this.props.currentUser.prof_image_url,
      fullname: "",
			profile_text: "",
			session_token: this.props.currentUser.session_token
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.setURL = this.setURL.bind(this);
	}

	componentDidMount(){
		if(this.props.currentUser.fullname !== null){
			this.setState({fullname: this.props.currentUser.fullname});
		}
		if(this.props.currentUser.profile_text !== null){
			this.setState({profile_text: this.props.currentUser.profile_text});
		}
	}

  setURL(url){
    this.setState({prof_image_url: url});
  }

  uploadImage(e) {
    const that = this;
    e.preventDefault();
      cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        that.setURL(results[0].secure_url);
      }
    });
  }

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		let result = {id: this.state.id, user:{
			id: this.state.id,
			prof_image_url: this.state.prof_image_url,
			profile_text: this.state.profile_text,
			fullname: this.state.fullname,
			session_token: this.state.session_token
		}};
		this.props.updateUser(result);
	}


	render() {
		return (
			<div className="user-update-form-container">
				<form onSubmit={this.handleSubmit} className="user-update-form-box">
					<div className="user-update-form-welcome"> Update User Profile </div>

					<div className="user-update-form">
						<label>
							<button className="user-update-image-button" onClick={this.uploadImage}>Upload Photo</button>
							<div className="user-update-form-image-box">
								<img src={this.state.prof_image_url} className="user-update-form-image"/>
							</div>
						</label>

						<div className="user-update-fullname-box"> Full Name: &nbsp;
							<input type="text"
							value={this.state.fullname}
							onChange={this.update("fullname")}
							className="user-update-fullname-input"
							placeholder={this.state.fullname}/>
						</div>

						<div className="user-update-profile-text-box"> Profile Text: &nbsp;
							<input type="text"
							value={this.state.profile_text}
							onChange={this.update("profile_text")}
							className="user-update-profile-text-input"
							placeholder={this.state.profile_text}/>
						</div>

					</div>

						<div className="user-update-form-button-box">
							<input type="submit"
									className="user-update-form-button"
									disabled={false}
									value="Update Profile"/>
						</div>
				</form>
			</div>
		);
	}
}

export default UserProfile;
