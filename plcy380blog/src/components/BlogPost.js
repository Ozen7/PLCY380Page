// src/components/BlogPost.js
import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, body, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePost = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`blog-post ${isExpanded ? 'expanded' : ''} ${isHovered ? 'hovered' : ''}`}>
      <h2
        className="post-title"
        onClick={togglePost}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
        <span className="post-date">{date}</span>
        <span className="arrow">{/* Arrow will be styled in CSS */}</span>
      </h2>
      {isExpanded && <p className="post-body">{body}</p>}
    </div>
  );
};

export default BlogPost;
