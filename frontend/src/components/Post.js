import React from 'react'

import CreatePost from '../pages/CreatePost'
import GetPost from '../pages/GetPost'
import { useGetPostsQuery } from '../slices/postsApiSlice'
const Post = () => {
   
  const { data: posts, refetch } = useGetPostsQuery()

  // Function to call after creating a post
  const handlePostCreated = () => {
    refetch()
  }
  
  return (
    <div className='section-center post'>
     
      <CreatePost onPostCreated={handlePostCreated} />
      <GetPost />
    </div>
  )
}

export default Post
