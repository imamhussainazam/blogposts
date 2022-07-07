import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'



const initialState ={
posts:[
    {
        id: '1',
        title: 'Using Redux Toolkit',
        content: 'I\'ve heard good things',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions : {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,

        }
    },
    {
        id: '2', 
        title: 'Reaction to react', 
        content: 'The more I develop uing react, the more I gain exp.',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions : {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,

        }
    },
    
]
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postUpdate:(state,action)=>{
            console.log(action.payload)
            state.posts=state.posts.map((post)=> {
                if(post.id === action.payload.post_id){
                    return {
                      ...post,  
                      title:action.payload.title,
                      content:action.payload.content
                    }
                  }
                  else return post;
              })
        },

        postDelete:(state,action)=>{
      state.posts=state.posts.filter((project)=> project.id !== action.payload)
        },
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            }, 
            //for every new prepare every oprtion should be written here
            prepare(title, content, category) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        category,
                        reactions : {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                
                        }
                    }
                }
            }
        },
        // to catch the values of the rxns
        reactionAdded(state, action){
            const {postId, reaction} = action.payload
            const existingPost = state.posts.find(post=> post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const { postAdded, reactionAdded, postDelete, postUpdate } = postsSlice.actions

export default postsSlice.reducer