import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';

import { requestPosts } from '../../actions/post_actions.js';

const mapStateToProps = state => ({
  posts: state.posts,
});


const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
