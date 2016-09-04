import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';

/*use params.id for dynamic routing */
class PostsShow extends Component {

componentWillMount(){
  this.props.fetchPost(this.props.params.id);
}

  render(){
    const { post } = this.props;

    if(!this.props.post){
      return <div>Loading..</div>
    }
    return (
      <div>
        <div>Blog post: { this.props.params.id }</div>
        <h3>{ post.title }</h3>
        <h6>{ post.categories }</h6>
        <p>{ post.content }</p>
      </div>


    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPost }, dispatch);
}

function mapStateToProps(state){
  return { post: state.posts.post }
}

//alternatively connect(mapStateToProps, {fetchPost})(PostsShow);
export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
