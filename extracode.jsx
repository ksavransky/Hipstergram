
import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.redirectToJoin = this.redirectToJoin.bind(this);
		// this.redirectToLogin = this.redirectToLogin.bind(this);
		this.animeType = this.animeType.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			this.props.router.push("/");
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
			return <Link to="/join">Join</Link>;
		} else {
			return <Link to="/login">Login</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className='error-prompt'>
						{error}
					</li>
				))}
			</ul>
		);
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

	render() {
		let loginText = (this.props.formType === "login") ? "Login" : "Sign Up";
		// debugger
		let demo1Button = (this.props.formType === "login") ?
		<button className="login-buttons demo-button"
			onClick={(e) => this.demoLogin(e, "george", "password")}>George</button> : "";
		let demo2Button = (this.props.formType === "login") ?
		<button className="login-buttons demo-button"
			onClick={(e) => this.demoLogin(e, "mary", "password")}>Mary</button> : "";

		return (
			<main className="session-form">
				<section className="login-form-container">
					<form
						className="login-form-box">
						Welcome to Pinitt!
						<div className="switch-button">
							{ this.navLink() }
						</div>


						<div>
						{ this.renderErrors() }
						</div>

						<div className="login-form">
							<label>
								<input
									type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input username"
									placeholder="Username"/>
							</label>

							<label>
								<input
									type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input password"
									placeholder="Password" />
							</label>

							<div className="login-button-box">
								<input type="submit"
									className="login-buttons login-button"
									value={loginText}
									onClick={this.handleSubmit}/>
								{demo1Button}
								{demo2Button}
							</div>
						</div>
					</form>
				</section>

			</main>
		);
	}

}

export default withRouter(SessionForm);





.session-form {
    opacity: .8;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: url('http://res.cloudinary.com/swissashley/image/upload/v1472660394/login_background_vaxtvm.jpg') no-repeat center;
    background-size: cover;
    text-align: center;
    z-index: 0;
}

.login-form-box {
  display: block;
  font-size: 20px;
  padding: 20px;
  width: 450px;
  height: 300px;
  position: relative;
  box-shadow: 5px 5px 20px black;
  margin: 100px auto;
  background: rgba(255, 255, 255, 0.5);
  color: black;
  z-index: 999;
}

.switch-button {
  position: absolute;
  top: 20px;
  right: 40px;
  text-decoration: none;
  color: rgb(0,51,204);
}

.login-form {
  text-align: center;
  padding: 20px;
}

input.login-input {
  width: 320px;
  height: 40px;
  margin: 5px;
  padding: 10px;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.error-prompt {
  color: red;
  list-style-type: none;
}

div.login-button-box {
  margin: 10px 0 0 35px;
  float: left;
}

.login-buttons {
  width: 100px;
  margin: 0 10px 0 0;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: white;
}

input.login-button {
  background-color: rgb(59,89,152);
}
.demo-button {
  background-color: rgb(0, 153, 51);
