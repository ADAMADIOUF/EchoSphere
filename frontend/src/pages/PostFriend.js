import React from 'react'
import FriendRequests from './FriendRequest'
import SendFriendRequest from './SendRequest'
import UserListAndFriendRequests from './UserListAndFriendRequests'

const PostFriend = () => {
  return (
    <div className='post-friend'>
      <SendFriendRequest/>
     <FriendRequests/>
     <UserListAndFriendRequests/>
    </div>
  )
}

export default PostFriend
