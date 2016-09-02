import { connect } from 'react-redux';
import UploadForm from './upload_form.jsx';
import { createPost } from '../../actions/post_actions.js';


const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
