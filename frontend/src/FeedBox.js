import './FeedBox.css';
import React, {useState} from 'react';

export default function FeedBox(props) {
    return (
        <div className="feedbox">
            <img className="feedbox--profileimg" src={props.profilePic}></img>
            <p1 className="feedbox--username">{props.username}</p1><br />
            <p1 className="feedbox--postdate">Posted on {props.postDate}</p1><br />
            <p1 className="feedbox--memorydate">Memory created on {props.memoryDate}</p1><br />
            <img className="feedbox--postimg" src={props.imagePic}></img>{/*maybe add functionality to add multiple images, (extra component for post style) extra formating within the post iself, etc*/}
            <p1 className="feedbox--note">{props.note}</p1><br />
        </div>
    );
}