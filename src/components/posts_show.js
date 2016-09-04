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
    return <div>Blog show { this.props.params.id }</div>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPost }, dispatch);
}

//alternatively connect(null, {fetchPost})(PostsShow);
export default connect(null, mapDispatchToProps)(PostsShow);
