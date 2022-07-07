import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import React from 'react'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useNavigate } from 'react-router-dom'

const PostsList = () => { 
    const posts = useSelector(selectAllPosts)
// for ordering the posts
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    const navigate = useNavigate();
    const renderedPosts = orderedPosts.map(post=>(
       
        <article key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <h3>{post.title }</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postCredit'>
                <TimeAgo timestamp = {post.date}/>
            </p>
        </article>
    ))
  return (
   <section>
        
        {renderedPosts}
   </section>
  )
}

export default PostsList