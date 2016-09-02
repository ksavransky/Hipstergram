import React from 'react';
import { Link, hashHistory } from 'react-router';

class UploadForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user_id: this.props.currentUser.id,
			caption: "",
      image_url: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const post = this.state;
		this.props.createPost({post});
	}



	render() {
		return (
			<div className="upload-form-container">
				<form onSubmit={this.handleSubmit} className="upload-form-box">
					<div className="upload-form-welcome"> Post A New Photo: </div>
					<div className="upload-form">
						<label> Caption:
							<input type="text"
								value={this.state.caption}
								onChange={this.update("caption")}
								className="upload-caption-input"
								placeholder="Photo Caption"/>
						</label>

						<br />
						<label> Upload Photo:&nbsp;

						</label>

						<br />
						<div className="upload-form-button-box">
							<input type="submit"
								className="upload-form-button"
								value="Create New Post"/>
						</div>
					</div>
				</form>
			</div>
		);
	}

}

export default UploadForm;
