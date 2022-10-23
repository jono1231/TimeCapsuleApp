import './App.css';
import React, {useState} from 'react';
import FeedBox from './components/FeedBox.js';
import FeedBoxData from './databaseTest.js';
import PostCreationPage from './components/PostCreationPage.js';

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
    <div className="App">
      {feedBoxElements}
      <PostCreationPage />
    </div>
  );
}

export default App;
