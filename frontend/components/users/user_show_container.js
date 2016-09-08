import { connect } from 'react-redux';
import UserShow from './user_show';
// Actions
import { requestUser } from '../../actions/user_actions.js';
import { createRelationship } from '../../actions/relationship_actions.js';
import { destroyRelationship } from '../../actions/relationship_actions.js';



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
  requestUser: id => dispatch(requestUser(id)),
  createRelationship: (relationship) => dispatch(createRelationship(relationship)),
  destroyRelationship: (relationship) => dispatch(destroyRelationship(relationship))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
