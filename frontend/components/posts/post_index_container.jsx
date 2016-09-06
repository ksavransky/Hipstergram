import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';

import { requestPosts } from '../../actions/post_actions.js';
import { createComment } from '../../actions/comment_actions.js';
import { destroyComment } from '../../actions/comment_actions.js';

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
});


const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  createComment: (comment) => dispatch(createComment(comment)),
  destroyComment: (comment) => dispatch(destroyComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
