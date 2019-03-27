import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <h2 className="CommentAuthor">
        {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;
