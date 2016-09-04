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

/* reducer fetch therefore this.props.posts */
renderPosts(){
  return this.props.posts.map((posts, index) => {
    return (
      <li className="list-group-item" key={ index }>
        <span className="pull-xs-right">{ posts.categories }</span>
        <strong>{ posts.title }</strong>
      </li>
    )
  })
}

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3> Posts </h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state){
  return { posts: state.posts.all }
}

// Alterntively connect(mapStateToProps, { fetchPosts })(PostsIndex);
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
