import React, { useState, useEffect } from 'react';
import { createPost } from '../actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';

export default function PostCreationPage() {

    const [postFormData, setPostFormData] = useState(
        {
            img: "",
            message: ""
        }
    );
    const dispatch = useDispatch();

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
        event.preventDefault();
        dispatch(createPost(postFormData));
        clear();
        console.log(postFormData);
    }

    function clear(){
        setPostFormData({message: "",im: ""});
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

