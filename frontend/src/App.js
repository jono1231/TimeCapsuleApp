import './App.css';
import React, {useState} from 'react';
import FeedBox from './FeedBox.js';
import FeedBoxData from './databaseTest.js';

function App() {
  const [feedBoxes, setFeedBoxes] = useState(FeedBoxData.data.feed);
  //use setFeedBoxes when pulling from database

  let feedBoxElements = feedBoxes.map(feedBox => (
    <FeedBox 
      id={feedBox.id}
      profilePic={feedBox.profilePic}
      name={feedBox.name}
      postDate={feedBox.postDate}
      memoryDate={feedBox.memoryDate}
      imagePic={feedBox.imagePic}
      note={feedBox.note}
    />
  ));
  return (
    <div className="App">
      {feedBoxElements}
    </div>
  );
}

export default App;
