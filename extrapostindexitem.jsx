import React from 'react';
import { hashHistory } from 'react-router';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.timeSincePost = this.timeSincePost.bind(this);
  }

  handleClick() {
    const postID = this.props.post.id;
    hashHistory.push("posts/" + postID );
  }

  timeSincePost(createdAt){
    let currentTime = new Date();
    let currentMinutes = currentTime.getUTCMinutes();
    let currentHours = currentTime.getUTCHours();
    let currentDate = currentTime.getUTCDate();
    let currentMonth = currentTime.getUTCMonth();
    let currentYear = currentTime.getUTCFullYear();

    let dateResult = createdAt;



    return dateResult;

  }

  render() {
    const post = this.props.post;
    return (
      <div className="post-index-item"
           onClick={this.handleClick}>
        <div className="post-item-header">
                <span className="post-item-user-photo">
                  <img src={post.user.prof_image_url} className="post-profile-image"/>
                </span>
                <span className="post-item-user-name">
                  {post.user.username}
                </span>
                <span className="post-item-date">
                  {this.timeSincePost(post.created_at)}
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
