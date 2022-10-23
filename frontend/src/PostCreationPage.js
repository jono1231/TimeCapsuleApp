import React, {useState} from 'react';
import PostMessage from './backend/models/postMessage';


export default function PostCreationPage() {

    const [postFormData, setPostFormData] = useState(
        {
            img: "",
            message: ""
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
        event.preventDefault()
        console.log(postFormData)
        
        let post = new PostMessage({
            title: postFormData.message,
            message: postFormData.img,
        })
        post.save();

    }

    return (
        <form className = "postCreationForm" onSubmit = {handleSubmit}>
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

