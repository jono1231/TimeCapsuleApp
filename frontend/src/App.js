import './App.css';
import React, {useState} from 'react';
import PostCreationPage from './PostCreationPage.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js'

function App() {
  return (
    <div className="app">
      <div className = "app--sidebar">
        <Sidebar />
      </div>
      <div className = "app--creationpage">
       <PostCreationPage />
      </div>
      <div className = "app--feed">
        <Feed />
      </div>
    </div>
  );
}

export default App;
