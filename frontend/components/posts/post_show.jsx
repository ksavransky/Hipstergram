import React from 'react';
import { hashHistory } from 'react-router';


class PostShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.timeSincePost = this.timeSincePost.bind(this);
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
      <div className="post-show-item">
        <div className="post-show-header">
                <span className="post-show-user-photo">
                  <img src={post.user.prof_image_url} className="post-profile-image"/>
                </span>
                <span className="post-show-user-name">
                  {post.user.username}
                </span>
                <span className="post-show-date">
                  {this.timeSincePost(post.created_at)}
                </span>
        </div>
        <img src={post.image_url} className="post-show-image"/>
        <span className="post-show-caption">
          {post.caption}
        </span>
      </div>
    );
  }
}

export default PostShowItem;
