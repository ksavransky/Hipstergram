import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UploadForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      image_url: "",
      caption: "",
			user_id: this.props.currentUser.id
		};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.setURL = this.setURL.bind(this);
	}

  setURL(url){
    this.setState({image_url: url});
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
		const post = this.state;
		this.props.createPost({post});
    this.setState({image_url: ""});
    this.setState({caption: ""});
	}


	render() {

		let submitbutton;

		if(this.state.image_url === ""){
			submitbutton = <input type="submit"
					className="upload-form-button-disabled"
					disabled={true}
					value="Upload Photo First"/>;
			}else {
				submitbutton = <input type="submit"
						className="upload-form-button-enabled"
						disabled={false}
						value="Create New Post"/>;
			}

		return (
			<div className="upload-form-container">
				<form onSubmit={this.handleSubmit} className="upload-form-box">
					<div className="upload-form-welcome"> Post A New Photo: </div>

					<div className="upload-form">
						<label>
							<button className="upload-image-button" onClick={this.uploadImage}>Upload Photo</button>
							<div className="upload-form-image-box">
								<img src={this.state.image_url} className="upload-form-image"/>
							</div>
						</label>

						<label> Caption:
							<input type="text"
								value={this.state.caption}
								onChange={this.update("caption")}
								className="upload-caption-input"
								placeholder="Photo Caption"/>
						</label>
					</div>


						<br />
						<div className="upload-form-button-box">
							{submitbutton}
						</div>

				</form>
			</div>
		);
	}

}

export default withRouter(UploadForm);
