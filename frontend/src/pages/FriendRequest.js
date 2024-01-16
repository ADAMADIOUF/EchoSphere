import React from 'react'
import {
  useGetFriendRequestsQuery,
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
} from '../slices/friendrequestSlice'

const FriendRequest = () => {
  const {
    data: friendRequests,
    isLoading,
    isError,
  } = useGetFriendRequestsQuery()

  const [acceptFriendRequest] = useAcceptFriendRequestMutation()
  const [declineFriendRequest] = useDeclineFriendRequestMutation()

  if (isLoading) return <p>Loading...</p>
  if (isError || !friendRequests || !Array.isArray(friendRequests.posts)) {
    return <p>Error loading friend requests.</p>
  }

  const handleAccept = async (requestId) => {
    try {
      await acceptFriendRequest(requestId).unwrap()
      // additional logic after accepting
    } catch (error) {
      console.error('Error accepting friend request:', error)
    }
  }

  const handleDecline = async (requestId) => {
    try {
      await declineFriendRequest(requestId).unwrap()
      // additional logic after declining
    } catch (error) {
      console.error('Error declining friend request:', error)
    }
  }

  return (
    <div>
      <h2>Friend Requests</h2>
      {friendRequests.posts.map((request) => (
        <div key={request._id}>
          {/* Check for the existence of requester and its properties */}
          <p>
            Request from:{' '}
            {request.requester ? request.requester.name : 'Unknown'}
          </p>
          <button onClick={() => handleAccept(request._id)}>Accept</button>
          <button onClick={() => handleDecline(request._id)}>Decline</button>
        </div>
      ))}
    </div>
  )
}

export default FriendRequest
