import './PostCreationPage.css';
import React, {useState} from 'react';

export default function PostCreationPage() {

    const [postFormData, setPostFormData] = useState(
        {
            message: "",
            img: {
                name: "",
                data: ""
            }
        }
    );

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setPostFormData(prevPostFormData => {
            return {
                ...prevPostFormData,
                [name]: type === "checked" ? checked : value
            }
        })
    }

    function handleFileChange(event) {
        const {name, value} = event.target;
        setPostFormData(prevPostFormData => {
            return {
                ...prevPostFormData,
                [name]: {
                    name: value.name,
                    data: value
                }
            }
        })
    }
    //need a validate form function

    function handleSubmit(event) {
        event.preventDefault();
        setPostFormData(
            {
                message: "",
                img: {
                    name: "",
                    data: ""
                }
            }
        )
        // submitToApi(formData)
        console.log(postFormData);
    }


    return (
        <form className = "postCreationForm" onSubmit = {handleSubmit}>
            <input 
                type = "text"
                placeholder = "Message"
                value = {postFormData.message}
                onChange = {handleChange}
                name = "message"
            /><br />
            <input className = "postCreationForm--fileinput"
                type = "file" 
                accept = "image/jpeg, image/png, image/jpg"
                value = {postFormData.img.data}
                onChange = {handleFileChange}
                name = "img"
            />
            {/*
            <button onClick={this.onFileUpload}>
            Upload!
            </button>
            {this.fileData()}
            <br />
            */}
            <button>Post</button>

        </form>
    )
}

