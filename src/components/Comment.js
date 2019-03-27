import React, { Component } from 'react';
import marked from 'marked';

class Comment extends Component {
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="Comment">
        <h2 className="CommentAuthor">
        {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
