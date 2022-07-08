import { useDispatch, useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import React, { useState } from 'react'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useLocation, useNavigate } from 'react-router-dom'
import { postDelete,postUpdate } from './postsSlice'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'


    const SinglePost = () => {
        
const dispatch=useDispatch();
        

        const posts = useSelector(selectAllPosts);
        const location = useLocation();
        const id = location.pathname.split("/")[1];
        const post= posts.find(post=>{
            if(post.id===id) return post;
        })
        const [open,setOpen]=useState(false);
        const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
        const onTitleChanged = e => setTitle(e.target.value)
        const onContentChanged = e => setContent(e.target.value)
    
        const onSubmit = (post_id) =>{
            if (title || content){
                dispatch(postUpdate({post_id,title,content}))
                setOpen(false)
            }
        }
const handleBack=()=>{
    navigate("/")
}
const navigate = useNavigate();
        const onEdit=()=>{
            setOpen(true);
        }
        const onDelete=(id)=>{
            dispatch(postDelete(id));
            navigate("/")
            
        }
       

      return (
        <div>
            <div><p style={{textDecoration:"underline", cursor:"pointer"}} onClick={()=>handleBack()}>back to index</p></div>
            <article key={post.id}>
            
        <h3>{post.title }</h3>
        <p>{post.content}</p>
        <p className='postCredit'>
            <TimeAgo timestamp = {post.date}/>
        </p>
        <ReactionButtons post={post}/>
    </article>
    <div style={{display:"flex", justifyContent:"space-evenly"}}><button 
                type="button"
                onClick ={()=>onEdit()}
            >
                Edit
            </button>
            <button 
                type="button"
                onClick ={()=>onDelete(post.id)}
            >
                Delete
            </button></div>
            {open && (
          <>
            <ReactDialogBox
              closeBox={()=>setOpen(false)}
              modalWidth='60%'
              headerBackgroundColor='teal'
              headerTextColor='white'
              headerHeight='15'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='260px'
              headerText='Edit details'
            >
              <div>
                <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                type="text"
                id = "postTitle"
                name = "postTitle"
                value = {title}
                onChange = {onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea 
                name="postContent"
                id="postContent" 
                value={content}
                onChange={onContentChanged}
            />
            <button 
                type="button"
                onClick={()=>onSubmit(post.id)}
            >
                Submit
            </button>
        </form>
              </div>
            </ReactDialogBox>
          </>
        )}
    </div>
      )
    }
    
    export default SinglePost
