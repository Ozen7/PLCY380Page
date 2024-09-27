// src/components/BlogPost.js
import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, body, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePost = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`blog-post ${isExpanded ? 'expanded' : ''}`} onClick={togglePost}>
      <h2 className="post-title">
        {title}
        <span className="post-date">{date}</span>
        <span className="arrow">{/* Arrow will be styled in CSS */}</span>
      </h2>
      {isExpanded && <p className="post-body">{body}</p>}
    </div>
  );
};

export default BlogPost;
