import React from 'react';

class CommentForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      comment_text: "",
			user_id: this.props.currentUser.id,
      post_id: this.props.post.id
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}


	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const comment = this.state;
		this.props.createComment({comment});
    this.setState({comment_text: ""});
	}


	render() {
		return (
			<div className="comment-form-container">
				<form onSubmit={this.handleSubmit} className="comment-form-box">
					<input type="text"
					value={this.state.comment_text}
					onChange={this.update("comment_text")}
					className="comment-text-input"
					placeholder="Write a comment."/>
				</form>
			</div>
		);
	}
}

export default CommentForm;
