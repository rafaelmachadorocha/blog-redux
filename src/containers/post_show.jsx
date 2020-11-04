import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsShow extends Component {
  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = Number.parseInt(ownProps.match.params.id, 10); // From URL
  const post = state.posts.find(p => p.id === idFromUrl);
  return { post };
}

export default connect(mapStateToProps)(PostsShow);
