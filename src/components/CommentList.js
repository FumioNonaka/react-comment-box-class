import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.removeComment = this.removeComment.bind(this);
  }
  removeComment(id) {
    this.props.onRemoveComment(id);
  }
  render() {
    const commentNodes = this.props.data.map((comment) =>
      (
        <Comment
          author={comment.author}
          id={comment.id}
          key={comment.id}
          onRemoveComment={this.removeComment}>
          {comment.text}
        </Comment>
      )
    );
    return (
      <div className="CommentList">
      {commentNodes}
      </div>
    );
  }
}

export default CommentList;
