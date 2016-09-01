import React from 'react';
import { hashHistory } from 'react-router';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const postID = this.props.post.id;
    hashHistory.push("posts/" + postID );
  }

  render() {
    const post = this.props.post;
    return (
      <div className="post-index-item"
           onClick={this.handleClick}>
        <div className="post-item-header">
                <span className="post-item-user-photo">
                  Photo goes here
                </span>
                <span className="post-item-user-name">
                  User name goes here
                </span>
                <span className="post-item-date">
                  date here
                </span>
        </div>
        <img src={post.image_url} className="post-image"/>
        <span className="post-item-caption">
          {post.caption}
        </span>
      </div>
    );
  }
}

export default PostIndexItem;
