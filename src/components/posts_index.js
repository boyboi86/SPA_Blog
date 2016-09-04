import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

/*componentWillMount will initiate
  when app first renders to kick start the initial data fetch*/
  
componentWillMount(){
  this.props.fetchPosts()
}

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
      List of blog posts
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch);
}
// Alterntively connect(null, { fetchPosts })(PostsIndex);
export default connect(null, mapDispatchToProps)(PostsIndex);
