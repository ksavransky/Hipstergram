import { connect } from 'react-redux';
import UserProfile from './user_profile.jsx';
import { updateUser } from '../../actions/session_actions.js';


const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
