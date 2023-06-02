import React, { useEffect, useState } from "react";
import "./App.css";
 
 
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, fetchPosts } from "./actions";
import Navbar from "./components/Navbar";
import UpdateForm from "./components/UpdateForm";
import Loader from "./components/Loader";

function App() {

  const [visiblePosts, setVisiblePosts] = useState(10);
  const [postsPerPage, setPostsPerPage] = useState(10);

 const dispatch = useDispatch();
 
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch posts from API and update state

  const handleUpdateClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseForm = () => {
    setSelectedPost(null);
  };
  const posts = useSelector((state) => state.posts);

   const handleDelete = (post) => {
    dispatch(deletePost(post.id));
  };

   

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

 

  if (posts.loading) {

    return <Loader />;
  
  }

  if (posts.error) {
    return <p>Error: {posts.error}</p>;
  }



  return (
   <div >
   <Navbar />
   <div className="posts-page">
    <div className="background"></div>
   <div className=" content-wrapper ">
      
      {
        posts.data.slice(0, visiblePosts).map((post) => (
        <div key={post.id} className="post-card">


<div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.body}</p>
        <div className="post-buttons">
           <button  className="post-button update" onClick={() => handleUpdateClick(post)}>Update</button>
        <button  className="post-button delete" onClick={()=>{handleDelete(post)}}>Delete</button>
        </div>
      </div>
           
        
        

        </div>
      ))}
 
      
    </div>
    
  
      {visiblePosts < posts.data.length && (
    <div className="button-container">
         <button onClick={() => setVisiblePosts(visiblePosts + postsPerPage)}>
          Load more 
        </button>
      </div>
       
      )}
   </div>
    {selectedPost && (
        <UpdateForm post={selectedPost} onClose={handleCloseForm} />
      )}

   </div>
  );
};

 
export default App;
