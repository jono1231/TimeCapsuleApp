import React, { useState } from 'react';

export default function PostCreationPage() {

    const [postFormData, setPostFormData] = useState(
        {
            message: "",
            username: "",
            selectedFile: ""
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

    function handleImageChange(event){
        let file = event.target.files[0];

        if(file){
            const reader = new FileReader();
            reader.onload = readerLoad.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    function readerLoad(readerEvt){
        let binaryString = readerEvt.target.result;
        setPostFormData({
            selectedFile: btoa(binaryString),
            username: postFormData.username,
            message: postFormData.message
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
                selectedFile: postFormData.selectedFile,
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
                type = "file"
                multiple = {false}
                accept=".png, .jpg, .jpeg"
                value = {postFormData.img}
                onChange = {handleImageChange}
                name = "img"
            />
            <img src = {file} />
            <button>Post</button>

        </form>
    )
}

