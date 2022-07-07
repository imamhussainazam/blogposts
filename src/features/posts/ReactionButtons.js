import React from 'react'
import { useDispatch } from "react-redux";
import {reactionAdded} from './postsSlice'

const reationEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '💖',
    rocket: '🚀',
    coffee: '☕',
                
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    const ReactionButtons = Object.entries(reationEmoji).map(([name, emoji])=>{

        return(
            <button
                key={name}
                type='button'
                className='reactionButton'
                onClick={()=>
                dispatch(reactionAdded({postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{ReactionButtons}</div>
  
}

export default ReactionButtons