import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import Comment from '../comment/comment.jsx';
import CommentForm from '../comment/comment-form.jsx';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.timeSincePost = this.timeSincePost.bind(this);
    this.addLike = this.addLike.bind(this);
    this.subtractLike = this.subtractLike.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  timeSincePost(createdAt){
    let currentTime = new Date();
    let currentMinutes = currentTime.getUTCMinutes();
    let currentHours = currentTime.getUTCHours();
    let currentDate = currentTime.getUTCDate();
    let currentMonth = currentTime.getUTCMonth();
    let currentYear = currentTime.getUTCFullYear();


    let postYear = createdAt.slice(0, 4);
    let postMonth = createdAt.slice(5, 7);
    let postDate = createdAt.slice(8, 10);
    let postHours = createdAt.slice(11, 13);
    let postMinutes = createdAt.slice(14, 16);
    let postSeconds = createdAt.slice(17, 19);

    let dateResult;

    if(currentYear > postYear){
      dateResult = currentYear - postYear;
      dateResult = dateResult + "y";
    }else if(currentMonth > postMonth){
      dateResult = currentMonth - postMonth;
      dateResult = dateResult + "m";
    }else if(currentDate > postDate){
      dateResult = currentDate - postDate;
      if(dateResult > 6){
        dateResult = Math.floor(dateResult / 7);
        dateResult = dateResult + "w";
      }else{
      dateResult = dateResult + "d";
      }
    }else if(currentHours > postHours){
      dateResult = currentHours- postHours;
      dateResult = dateResult + "h";
    } else {
      dateResult = currentMinutes- postMinutes;
      dateResult = dateResult + "m";
    }

    return dateResult;
  }

  addLike(){
    let like = {
        user_id: this.props.currentUser.id,
        post_id: this.props.post.id};
    this.props.createLike({like});
  }

  subtractLike(){
    let likeId;
    this.props.post.likes.forEach(like => {
      if(like.user_id === this.props.currentUser.id){
        likeId = like.id;
      }
    });
    let like = {
        id: likeId,
        user_id: this.props.currentUser.id,
        post_id: this.props.post.id};
    this.props.destroyLike(like);
  }

  handleClick() {
    const userId = this.props.post.user_id;
    hashHistory.push("users/" + userId );
  }


  render() {
    const post = this.props.post;

    let comments = post.comments;
    let commentKeys = Object.keys(comments);

    let likesDiv;
    let likesText;
    if(post.likes.length === 1) {
       likesText = `${post.likes.length} like`;
    }
    if (post.likes.length > 1) {
       likesText = `${post.likes.length} likes`;
    }
    if(post.likes.length !== 0) {
      likesDiv = <div className="likes-text"> {likesText} </div>;
    }

    let currentUserLikes = false;

    post.likes.forEach(like => {
      if(like.user_id === this.props.currentUser.id){
        currentUserLikes = true;
      }
    });

    let likesSymbol;
    if(currentUserLikes){
      likesSymbol = <img src="http://res.cloudinary.com/ksavransky/image/upload/v1473179780/fullmasonjar2_sajm7u.jpg"
        className="likes-symbol"
        onClick={this.subtractLike}
        />;
    } else {
      likesSymbol = <img src="http://res.cloudinary.com/ksavransky/image/upload/v1473130945/emptyjar_uieq54.png"
        className="likes-symbol"
        onClick={this.addLike}
        />;
    }

    return (
      <div className="post-index-item">
        <div className="post-item-header">
                <span className="post-item-user-photo"
                  onClick={this.handleClick}>
                  <img src={post.user.prof_image_url}
                    className="post-profile-image"/>
                </span>
                <span className="post-item-user-name"
                  onClick={this.handleClick}>
                  {post.user.username}
                </span>
                <span className="post-item-date">
                    {this.timeSincePost(post.created_at)}
                </span>
        </div>
        <img src={post.image_url} className="post-image"/>
        <span className="post-likes-box">
          {likesDiv}
        </span>
        <span className="post-item-caption-box">
            <div className="post-item-caption-username">
              {post.user.username}
            </div>
            <div className="post-item-caption-text">
            {post.caption}
            </div>
        </span>
        <ul className="post-comments-index">
          {commentKeys.map(key => <Comment
            key={key}
            comment={comments[key]}
            currentUser={this.props.currentUser}
            destroyComment={this.props.destroyComment} />)}
        </ul>
        <span className="comment-like-box">
            {likesSymbol}
          <span className="comment-form">
            <CommentForm
              post={post}
              currentUser={this.props.currentUser}
              createComment={this.props.createComment}/>
          </span>
        </span>
      </div>
    );
  }
}

export default PostIndexItem;
