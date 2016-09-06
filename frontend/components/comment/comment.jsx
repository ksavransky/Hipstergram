import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }


  deleteComment(){
    this.props.destroyComment(this.props.comment);
  }

  render() {
    const {comment} = this.props;
    const {currentUser} = this.props;

    let xButton;
    if(comment.user_id === currentUser.id){
      xButton = <div className="comment-x"
        onClick={this.deleteComment}>
        X
      </div>;
    }

    return (
      <div className="comment">
        <div className="comment-username">
          {comment.username}
        </div>
        <div className="comment-text">
          {comment.comment_text}
        </div>
        {xButton}
      </div>
    );
  }
}

export default Comment;
