import { connect } from 'react-redux';
import UserShow from './user_show';
// Actions
import { requestUser } from '../../actions/user_actions.js';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const userId = parseInt(ownProps.params.userId);
  const user = state.users[userId] || {};
  return {
    userId,
    user,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
