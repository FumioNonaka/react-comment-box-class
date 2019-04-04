import React, { Component } from 'react';
import marked from 'marked';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  handleClick() {
    const props = this.props;
    props.onRemoveComment({
      author: props.author,
      text: props.children.toString()
    });
  }
  render() {
    return (
      <div className="Comment">
        <h2 className="CommentAuthor">
        {this.props.author}
        </h2>
        <div className="CommentText">
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <button type="button" onClick={this.handleClick}>削除</button>
        </div>
      </div>
    );
  }
}

export default Comment;
