import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.props.logout;
    this.redirectToLoggedIn = this.redirectToLoggedIn.bind(this);

  }

  redirectToLoggedIn(){
    this.logout();
  }

  componentWillReceiveProps(newProps){
    if (!newProps.currentUser){
    this.props.router.replace("/login");
    }
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
          <button className="navbar-logout-button" onClick={this.redirectToLoggedIn}>Log Out</button>
      </div>
    );
  }
}


export default withRouter(Navbar);
