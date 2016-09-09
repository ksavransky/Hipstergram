import { connect } from 'react-redux';
import UserProfile from './user_profile.jsx';
import { updateUser } from '../../actions/user_actions.js';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
