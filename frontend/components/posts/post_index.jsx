import React from 'react';
import PostIndexItem from './post_index_item';



class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
    this.props.requestUsers();
  }

  render() {
    let { posts } = this.props;
    const postKeys = Object.keys(posts);
    return(

      <div className="post-index">

        <div className="suggesion-box">
          <div className="suggestion-box-label">
            SUGGESTIONS FOR YOU
          </div>

          <ul className="sugesstion-index-ul">
          </ul>
        </div>

        <ul className="post-index-ul">
          {postKeys.map(key => <PostIndexItem
            key={key}
            post={posts[key]}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            destroyComment={this.props.destroyComment}
            createLike={this.props.createLike}
            destroyLike={this.props.destroyLike}
            />)}
        </ul>
      </div>

    );
  }
}

export default PostIndex;
