import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

/*use params.id for dynamic routing */
class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

componentWillMount(){
  this.props.fetchPost(this.props.params.id);
}

onDeleteClick(){
  this.props.deletePost(this.props.params.id)
  .then(()=>{
    this.context.router.push('/');
  })
}

  render(){
    const { post } = this.props;

    if(!this.props.post){
      return <div>Loading..</div>
    }
    return (
      <div>
      <Link to="/" className="btn btn-primary">Back to home</Link>
        <h3 className="alert alert-success">{ post.title }</h3>
        <h6 className="alert alert-info">{ post.categories }</h6>
        <p className="jumbotron">{ post.content }</p>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>Delete Post

          </button>
      </div>


    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

function mapStateToProps(state){
  return { post: state.posts.post }
}

//alternatively connect(mapStateToProps, {fetchPost})(PostsShow);
export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
