import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Cards/Cards';
import PostForm from './components/PostForm/PostForm';
import './App.css';

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
    <div className="app">
      <span>Posts</span>
      <div className="centered">
        <PostForm createPost={createPost} />
        <div className="cards-container">
          {posts.map((post) => (
            <Card key={post.id} post={post} deletePost={deletePost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
