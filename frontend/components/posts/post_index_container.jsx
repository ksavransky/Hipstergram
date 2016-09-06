import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';

import { requestPosts } from '../../actions/post_actions.js';
import { createComment } from '../../actions/comment_actions.js';
import { destroyComment } from '../../actions/comment_actions.js';
import { createLike } from '../../actions/like_actions.js';
import { destroyLike } from '../../actions/like_actions.js';

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
});


const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  createComment: (comment) => dispatch(createComment(comment)),
  destroyComment: (comment) => dispatch(destroyComment(comment)),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like) => dispatch(destroyLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
