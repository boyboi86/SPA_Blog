import React, { Component } from 'react';

/*use params.id for dynamic routing */
class PostsShow extends Component {
  render(){
    return <div>Blog show { this.props.params.id }</div>
  }
}


export default PostsShow;
