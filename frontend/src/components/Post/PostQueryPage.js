import { DoorBack } from '@mui/icons-material';
import React, { useState } from 'react';
import Feed from '../Feed/Feed';
import FeedBox from '../Feed/FeedBox';

export default function PostQueryPage() {

    const [postFormData, setPostFormData] = useState(
        {
            username: "",
        }
    );
    
    const [file, setFile] = useState();

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setPostFormData(prevPostFormData => {
            return {
                ...prevPostFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        
    }
    
    async function handleSubmit(event) {
        const postURL = "http://localhost:5000/post" //Our previously set up route in the backend
        let response = await fetch(postURL);

        if(response.ok){
            let json = await response.json();
            
        }
    }

    return (
        <form className = "postQueryForm" onSubmit = {handleSubmit}>
            <input 
                type = "text"
                placeholder = "Username"
                value = {postFormData.username}
                onChange = {handleChange}
                name = "username"
            />
            <button>Query</button>
        </form>
    )
}

