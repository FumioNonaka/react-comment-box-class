import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.removeComment = this.removeComment.bind(this);
  }
  removeComment(comment) {
    this.props.onRemoveComment(comment);
  }
  render() {
    const commentNodes = this.props.data.map((comment, id) =>
      (
        <Comment author={comment.author} key={comment.id} onRemoveComment={this.removeComment}>
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
