import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
