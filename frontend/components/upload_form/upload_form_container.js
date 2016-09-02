import { connect } from 'react-redux';
import UploadForm from './upload_form.jsx';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => {
  createPost: () => dispatch(createPost()),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
