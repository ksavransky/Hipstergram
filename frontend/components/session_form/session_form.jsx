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

		this.animeType = this.animeType.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	animeType($el, word, callback){

		var typing = setInterval(function(){
			$el.val( $el.val() + word.slice(0,1) );
			word = word.substr(1);

			if (!word){
				clearInterval(typing);
				callback();
			}
		}, 50);
	}

	demoLogin(e, username, password) {
		e.preventDefault();
		let $username = $('.username');
		let $password = $('.password');
		let $submitButton = $('.login-button');
		let that = this;
		this.animeType($username, username, () => {
			this.animeType($password, password, ()=> {
				that.setState({username, password });
				$submitButton.click();
			});
		});
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
				<Link to="/signup" className="login-link">Sign Up</Link>
				</div>);
		} else {
			return (
				<div>
				Have an account? &nbsp;
				<Link to="/login" className="login-link">Log In</Link>
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


		let GuestButton = (this.props.formType === "login") ?
		<button className="login-buttons demo-button"
			onClick={(e) => this.demoLogin(e, "Guest", "password")}>Guest</button> : "";


		return (
			<div className="login-form-container">
				<video id="background-video" muted loop autoPlay>
						<source src="http://res.cloudinary.com/ksavransky/video/upload/v1472622294/hipsterlife_ntkbvi.mp4" type="video/mp4"/>
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
								className="login-input"
								placeholder="Username"/>
						</label>

						<br />
						<label> Password:&nbsp;
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder="Password"  />
						</label>

						<br />
						<div className="login-button-box">
							<input type="submit"
								className="login-buttons login-button"
								value={this.submitButtonText()} />
							{GuestButton}
						</div>
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
