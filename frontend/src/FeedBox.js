import './FeedBox.css';
import React, {useState} from 'react';

export default function FeedBox(props) {
    return (
        <div className="feedbox">
            <img className="feedbox--profileimg" src={props.profilePic}></img>
            <text className="feedbox--username">{props.username}</text> <br/ >
            <text className="feedbox--postdate">Posted on {props.postDate}</text> 
            <text className="feedbox--memorydate">Memory created on {props.memoryDate}</text>    
            <img className="feedbox--postimg" src={props.imagePic}></img>{/*maybe add functionality to add multiple images, (extra component for post style) extra formating within the post iself, etc*/}<br />
            <p className="feedbox--note">{props.note}</p>
        </div>
    );
}