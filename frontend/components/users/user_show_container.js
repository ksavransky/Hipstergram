import { connect } from 'react-redux';
import UserShow from './user_show';
// Actions
import { requestUser } from '../../actions/user_actions.js';


const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const user = state.users[userId] || {};
  return {
    userId,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
