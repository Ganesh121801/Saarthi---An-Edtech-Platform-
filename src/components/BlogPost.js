import React from 'react';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <img src={post.image} alt={post.title} />
      </a>
      <div className="post-description">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </div>
  );
}


export default BlogPost;