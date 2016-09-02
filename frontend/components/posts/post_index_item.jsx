import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import PostShowContainer from './post_show_container.jsx';
import PostShowItem from './post_show.jsx';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.timeSincePost = this.timeSincePost.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.style = {
        overlay : {
          position        : 'fixed',
          top             : 0,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
        },
        content : {
          display         : "block",
          width           : "600px",
          margin          : "auto",

          // position        : 'fixed',
          // top             : '75px',
          // left            : '75px',
          // right           : '10x',
          // bottom          : '10px',
          border          : '1px solid #ccc',
          padding         : '1px',
          backgroundColor : "#c5d5da",

      }
    };
    this.state = {modalOpen: false};
  }



  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal(){
    this.setState({ modalOpen: true });
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
           onClick={this.openModal}>
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
        <Modal
         isOpen={this.state.modalOpen}
         onRequestClose={this.closeModal}
         style={this.style}
         >
           <PostShowContainer post={post}/>
       </Modal>
      </div>
    );
  }
}

export default PostIndexItem;
