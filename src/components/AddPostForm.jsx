import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions';
import './AddPostForm.css';

function AddPostForm({show}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId ,setUserId] = useState(2001);
  const [id ,setId] = useState(1001)

  const handleSubmit = (e) => {
    e.preventDefault();

 setId(id+1);
        setUserId(userId+1);
    // Create the post object
    const postData = {
       
     userId:  userId,
     
      title: title,
      body: content,
    };

    // Dispatch the addPost action
    dispatch(addPost(postData));

    // Reset the form fields
    setTitle('');
    setContent('');
    
  };

   const closeForm=()=>{
    
    show();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Add Post</button>
           <button className='post-button delete'  onClick={closeForm} >Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
