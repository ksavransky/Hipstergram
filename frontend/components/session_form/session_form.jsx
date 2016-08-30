import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return (
				<div>
				Do not have an account? &nbsp;
				<Link to="/signup">Sign Up</Link>
				</div>);
		} else {
			return (
				<div>
				Have an account? &nbsp;
				<Link to="/login">Log In</Link>
				</div>);
		}
	}

	submitButtonText(){
		if (this.props.formType === "login") {
			return "Log In";
		} else {
			return "Sign Up";
		}
	}



	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (

			<div className="login-form-container">
				<video id="background-video" loop autoPlay>
						<source src="http://res.cloudinary.com/ksavransky/video/upload/v1472596919/Coffee-Shot_s2c19r.mp4" type="video/mp4"/>
					</video>
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<div className="welcome-div"> Hipstergram! </div>
					<div className="welcome-div-bottom"> Share photos with the cool kids. </div>
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<input type="submit" value={this.submitButtonText()} />
						<br />
						<div className="signup-login-link">
							{ this.navLink() }
						</div>
					</div>
				</form>
			</div>
		);
	}

}

export default SessionForm;
