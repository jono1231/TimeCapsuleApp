import './Feed.css';
import React, {useState} from 'react';
import FeedBox from './FeedBox.js';
import FeedBoxData from './databaseTest.js';

export default function Feed() {
    const [feedBoxes, setFeedBoxes] = useState(FeedBoxData.data.feed);
    //use setFeedBoxes when pulling from database

    let feedBoxElements = feedBoxes.map(feedBox => (
      <FeedBox 
        key={feedBox.id}
        profilePic={feedBox.profilePic}
        username={feedBox.username}
        postDate={feedBox.postDate}
        memoryDate={feedBox.memoryDate}
        imagePic={feedBox.imagePic}
        note={feedBox.note}
      />
    ));
  
    return feedBoxElements;
}