import React from 'react';
import { Link } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    return (
      <div className="navbar">
          <span className="navbar-logo">
            Hip photo
          </span>
          <span className="navbar-text">
            Hipstergram!
          </span>
          <span className="navbar-search-container">
            Search here
          </span>
          <span className="navbar-photo-upload">
            Photo upload here
          </span>
          <span className="navbar-user-photo">
            User photo
          </span>
          <span className="navbar-user-name">
            Hi, {currentUser.username}!
          </span>
          <button className="navbar-logout-button" onClick={logout}>Log Out</button>
      </div>
    );
  }
}

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login" activeClassName="current">Login</Link>
//     &nbsp;or&nbsp;
//     <Link to="/signup" activeClassName="current">Sign up!</Link>
//   </nav>
// );
//
// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
// 		<h2 className="header-name">Hi, {currentUser.username}!</h2>
// 		<button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
//
// function Navbar({currentUser, logout}){
//   if (currentUser){
//     return personalGreeting(currentUser, logout);
//   } else {
//     return sessionLinks();
//   }
// }

export default Navbar;
