import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../actions';
import './UpdateForm.css';
function UpdateForm ({ post, onClose }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = { ...post, title, body };
    dispatch(updatePost(updatedPost));

    onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };


  const closeForm=()=>{
    
    onClose();
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="update-form-overlay">
    <form className='update-form' onSubmit={handleSubmit}>
      <h2>Update Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={handleBodyChange} />
      </div>
      <button type="submit">Update</button>
      <button className='post-button delete'  onClick={closeForm} >Close</button>
    </form>
    </div>
  );
};

export default UpdateForm;
