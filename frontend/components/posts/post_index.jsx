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


      <div>
        <ul className="post-list">
          {postKeys.map(key => <PostIndexItem
            key={key}
            post={posts[key]} />)}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
