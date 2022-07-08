import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { postAdded } from "./postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)

    const onSavePostClicked = () =>{
        if (title && content){
            dispatch(
                postAdded(
                    title,content, category
                )
            )
            setTitle('')
            setContent('')
            setCategory('')
            navigate("/")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(category)

    
  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                type="text"
                id = "postTitle"
                name = "postTitle"
                value = {title}
                onChange = {onTitleChanged}
            />

            <label htmlFor="postCategory">Category:</label>
            <textarea
            name="postCategory"
            id="postCategory" 
                value={category} 
                onChange={onCategoryChanged}
                    
/>
            

            <label htmlFor="postContent">Content:</label>
            <textarea 
                name="postContent"
                id="postContent" 
                value={content}
                onChange={onContentChanged}
            />
            <div style={{display:"flex", justifyContent:"space-evenly"}}><button 
                type="button"
                onClick={onSavePostClicked}
                disabled= {!canSave}
            >
                Submit
            </button>
            <button 
                onClick={() => navigate("/")}
            >
                cancel
            </button></div>
        </form>
    </section>
  )
}

export default AddPostForm
