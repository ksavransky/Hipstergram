import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';
import UploadFormContainer from '../../components/upload_form/upload_form_container.js'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.props.logout;
    this.redirectToLoggedIn = this.redirectToLoggedIn.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
    this.redirectToIndex = this.redirectToIndex.bind(this);



    this.state = {modalOpen: false};
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.style = {
        overlay : {
          position        : 'fixed',
          top             : 0,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
        },
        content : {
          display            : "block",
          width              : "600px",
          height             : "530px",
          "margin"           : "auto",
          position           : "relative",
          border             : '2px solid grey',
          "border-radius"    : "10px",
          "padding-right"    : '1px',
          "background-color" : "aliceblue",
          "font-family"      : "Roboto, proxima-nova, Helvetica Neue, Arial"
      }
    };
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  redirectToLoggedIn(){
    this.logout();
  }

  componentWillReceiveProps(newProps){
    if (!newProps.currentUser){
    this.props.router.replace("/login");
    }
  }

  redirectToProfile(){
    this.props.router.replace("/profile");
  }

  redirectToIndex(){
    this.props.router.replace("/posts");
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    return (
      <div className="navbar">
          <span className="navbar-logo" onClick={this.redirectToIndex}>
            <img src="http://res.cloudinary.com/ksavransky/image/upload/v1473023051/logo_tcqjw3.jpg" className="navbar-logo-image"/>
            <span className="navbar-text-line" onClick={this.redirectToIndex}>
              |
            </span>
            <span className="navbar-text" onClick={this.redirectToIndex}>
              Hipstergram!
            </span>
          </span>
          <span className="navbar-search-container">
            Search here
          </span>
          <span className="navbar-photo-upload" onClick={this.openModal}>
            Photo upload here
          </span>
          <span className="navbar-user-photo" onClick={this.redirectToProfile}>
            User photo
          </span>
          <span className="navbar-user-name">
            Hi, {currentUser.username}!
          </span>
          <button className="navbar-logout-button" onClick={this.redirectToLoggedIn}>Log Out</button>
          <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this.closeModal}
           style={this.style}
           >
             <UploadFormContainer/>
         </Modal>
      </div>
    );
  }
}


export default withRouter(Navbar);
