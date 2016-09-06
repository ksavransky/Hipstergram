import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    let { posts } = this.props;
    const postKeys = Object.keys(posts);
    return(

      <div className="post-index">
        <ul className="post-index-ul">
          {postKeys.map(key => <PostIndexItem
            key={key}
            post={posts[key]}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            destroyComment={this.props.destroyComment}
            />)}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
