import { connect } from 'react-redux';
import PostShow from './post_show';
// Actions
import { requestPost, removePost, updatePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  const post = parseInt(ownProps.params.post);
  return {
    post
  };
};

const mapDispatchToProps = dispatch => ({
  requestPost: id => dispatch(requestPost(id)),
  removePost: post => dispatch(removePost(post)),
  updatePost: post => dispatch(updatePost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
