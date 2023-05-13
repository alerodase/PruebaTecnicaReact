import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Cards/Cards';
import PostForm from './components/PostForm/PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm createPost={createPost} />
      {posts.map((post) => (
        <Card key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default App;
