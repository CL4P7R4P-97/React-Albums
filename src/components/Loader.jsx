import React from 'react';
import './Loader.css';

function Loader(){
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-inner" />
        <div className="loader-inner" />
        <div className="loader-inner" />
      </div>
    </div>
  );
};

export default Loader;
