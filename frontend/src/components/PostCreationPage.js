import React, { useState } from 'react';

export default function PostCreationPage() {

    const [postFormData, setPostFormData] = useState(
        {
            img: "",
            message: "",
            username: ""
        }
    );

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setPostFormData(prevPostFormData => {
            return {
                ...prevPostFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        const postURL = "http://localhost:5000/post" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                creator: postFormData.username,
                title: postFormData.message,
                message: postFormData.img,
            })
        })
    }

    function clear(){
        setPostFormData({message: "",im: ""});
    }

    return (
        <form className = "postCreationForm" onSubmit = {handleSubmit}>
            <input 
                type = "text"
                placeholder = "Username"
                value = {postFormData.username}
                onChange = {handleChange}
                name = "username"
            />
            <input 
                type = "text"
                placeholder = "Message"
                value = {postFormData.message}
                onChange = {handleChange}
                name = "message"
            />
            <input 
                type = "text"
                placeholder = "Upload an img"
                value = {postFormData.img}
                onChange = {handleChange}
                name = "img"
            />
            <button>Post</button>

        </form>
    )
}

