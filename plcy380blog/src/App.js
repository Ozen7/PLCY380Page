// src/App.js
import React from 'react';
import BlogPost from './components/BlogPost';
import './App.css';
import { posts } from './components/posts';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">PLCY380 Changemaker Challenge Blog</h1>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          body={post.body}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default App;
