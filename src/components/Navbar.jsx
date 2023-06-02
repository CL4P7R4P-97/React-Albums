// Navbar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
 
import './navbar.css';
import { fetchPosts, searchPosts } from '../actions';
import AddPostForm from './AddPostForm';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

 

  // Fetch posts from API and update state

  
  const handleAddPost = () => {
     setShowForm(!showForm);
  };
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchPosts(searchTerm));
  };

  const handleChange = (e) => {
    
    
   e.target.value.toString().trim() === '' ? dispatch(fetchPosts()) : setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">MY POSTS</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Posts..."
          value={searchTerm}
          onChange={handleChange}
        />
        
        <button className="search-button" onClick={handleSearch}>
          Search
       
        </button>
          &ensp;
          <button className="search-button" onClick={handleAddPost}> + Add Post</button>
         
      {showForm && <AddPostForm show={handleAddPost}/>}
      </div>
    </nav>
  );
};

export default Navbar;
