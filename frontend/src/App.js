import './App.css';
import React, {useState} from 'react';
import PostCreationPage from './PostCreationPage.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js'

function App() {
  return (
    <div className="app">
      <Sidebar className="app--sidebar" />
      <PostCreationPage className="app--creationpage" />
      <Feed className="app--feed" />
    </div>
  );
}

export default App;
