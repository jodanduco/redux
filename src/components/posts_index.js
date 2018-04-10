import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  /**
   * This method is called after DOM is ready
   * with strict spelling
   */
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Post Index
      </div>
    );
  }
}
// Action creator shortcut -> props 
export default connect(null, { fetchPosts })(PostIndex);