import React from 'react';



class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const post = this.props.post;

    return (
        <img src={post.image_url} className="user-post-image"/>
    );
  }
}

export default PostIndexItem;
