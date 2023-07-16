import React, { useContext } from 'react';
import BlogMarkdown from './BlogMarkdown';
import './blog.css';
import { GlobalContext } from '../../contexts';
import LoadingBlogEntries from './LoadingBlogEntries';

export default function Blog({ match }) {
  const { state } = useContext(GlobalContext);

  const blogId = match.params.blog_id;
  const entry = state.blogs.find(blog => blog.id === parseInt(blogId));

  if (!entry) {
    return <LoadingBlogEntries />;
  }

  return (
    <div className="entry-container">
      <div className="top-container">
        <div className="entry-top">
          <h1 className="title">{entry.entry_title}</h1>
          <h4 className="margin-none">Written By: Bryce Soghigian</h4>
          <div className="sub-topics">
            <h3 className="margin-none">{entry.date_created}</h3>
            <h6 className="margin-none">Topic: {entry.category}</h6>
          </div>
        </div>
        <div>
          <h5>Short Description:</h5>
          <p className="entry-description">{entry.entry_description}</p>
        </div>
      </div>
      <div className="entry-content">
        <BlogMarkdown content={entry.entry_content} />
      </div>
    </div>
  );
}

