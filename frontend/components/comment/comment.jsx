import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {comment} = this.props;
    const {currentUser} = this.props;

    let xButton;
    if(comment.user_id === currentUser.id){
      xButton = <div className="comment-x">
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
