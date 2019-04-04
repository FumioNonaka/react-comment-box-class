const CommentStorage = {
  get STORAGE_KEY() {
    return 'react-comment-list-16.8';
  },
  get uid() {
    return CommentStorage._uid || 0;
  },
  set uid(value) {
    CommentStorage._uid = value;
  },
  fetch() {
    const comments = JSON.parse(localStorage.getItem(CommentStorage.STORAGE_KEY) || '[]');
    comments.forEach((comment, index) =>
      comment.id = index
    );
    CommentStorage.uid = comments.length;
    return comments;
  },
  save(comments) {
    localStorage.setItem(CommentStorage.STORAGE_KEY, JSON.stringify(comments));
  }
};

export default CommentStorage;
