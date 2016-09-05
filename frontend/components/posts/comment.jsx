import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {comment} = this.props;

    return (
      <div className="comment">
        <div className="comment-username">
          {comment.username}
        </div>
        <div className="comment-text">
          {comment.comment_text}
        </div>
      </div>
    );
  }
}

export default Comment;
