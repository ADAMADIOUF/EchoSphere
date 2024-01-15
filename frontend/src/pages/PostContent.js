import React from 'react'
import Post from '../components/Post'
import PostLocation from './PostLocation'
import PostFriend from './PostFriend'
import CommentForm from './CommentForm'
import TopBar from '../components/TopBar'

const PostContent = () => {
  return (
    <>
    <TopBar/>
      <div className='section-center postContent'>
        <PostLocation />
        <Post />

        <PostFriend />
      </div>
    </>
  )
}

export default PostContent
