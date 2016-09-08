import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestUsers } from '../../actions/user_actions.js';
import Navbar from './navbar.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
