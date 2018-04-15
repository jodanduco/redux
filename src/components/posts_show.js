import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
class PostsShow extends Component {
  /**
   * This life cicle method is called after component
   * is render in the dom
   */
  componentDidMount() {
    // Make request is we don't have the post
    if(!this.props.post) {
      const {id} = this.props.match.params; // provided by react-router
      this.props.fetchPost(id);
    }
  }

  onDeletePost() {
    const { id } = this.props.match.params; 
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post){
      return <div>Loading ...</div>
    }
    return(
      <div>
        <Link to="/">Back To Index</Link>
        <button 
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeletePost.bind(this)}>
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

/**
 * Generates props
 * @param {Obj} posts All the posts  
 * @param {*} ownProps this.props === ownProps
 */
function mapStateToProps({ posts }, ownProps) {
  const post = posts[ownProps.match.params.id];
  return { post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);