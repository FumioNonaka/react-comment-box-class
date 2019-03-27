const CommentStorage = {
  async fetch() {
    const url = 'comments.json';
    try {
      const jsonData = 
        await (
          await fetch(url)
        ).json();
      return jsonData;
    } catch (error) {
      console.error('エラー:', error);
    }
  }
};

export default CommentStorage;
