import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import CommentStorage from './components/CommentStorage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }
  componentDidMount() {
    this.setState({data: CommentStorage.fetch()});
  }
  handleCommentSubmit(comment) {
    const data = [...this.state.data, comment];
    this.setState({data: data});
    CommentStorage.save(data);
  }
  removeComment(id) {
    const data = this.state.data.filter(comment =>
      comment.id !== id
    );
    this.setState({data: data});
    CommentStorage.save(data);
  }
  render() {
    return (
      <div className="App">
        <h1>コメント</h1>
        <CommentList data={this.state.data} onRemoveComment={this.removeComment} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default App;
