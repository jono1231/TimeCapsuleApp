import './App.css';
import React, {useState} from 'react';
import FeedBox from './components/Feed/FeedBox.js';
import FeedBoxData from './databaseTest.js';
import PostCreationPage from './components/Post/PostCreationPage.js';
import PostQueryPage from './components/Post/PostQueryPage';
import Feed from './components/Feed/Feed.js';
import Sidebar from './components/Sidebar/Sidebar.js'

function App() {
  const [feedBoxes, setFeedBoxes] = useState(FeedBoxData.data.feed);
  //use setFeedBoxes when pulling from database

  let feedBoxElements = feedBoxes.map(feedBox => (
    <FeedBox 
      id={feedBox.id}
      profilePic={feedBox.profilePic}
      username={feedBox.username}
      postDate={feedBox.postDate}
      memoryDate={feedBox.memoryDate}
      imagePic={feedBox.imagePic}
      note={feedBox.note}
    />
  ));

  
  return (
    <div className="app">
      <div className = "app--sidebar">
        <Sidebar />
      </div>
      <div className = "app--creationpage">
       <PostCreationPage />
       <PostQueryPage />
      </div>
      <div className = "app--feed">
        <Feed />
      </div>
    </div>
  );
}

export default App;
