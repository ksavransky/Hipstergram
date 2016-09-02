import React from 'react';
import { Link, hashHistory } from 'react-router';

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
    this.state.image_url = url;
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
    console.log(post);
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
              <button className="upload-image-button" onClick={this.uploadImage}>Upload Photo</button>
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
