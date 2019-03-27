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
  }
  async componentDidMount() {
    this.setState({data: await CommentStorage.fetch()});
  }
  handleCommentSubmit(comment) {
    console.log(comment);  // 確認用
    const data = [...this.state.data, comment];
    this.setState({data: data});
  }
  render() {
    return (
      <div className="App">
        <h1>コメント</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default App;
