import React from 'react'
import {
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
} from '../slices/friendrequestSlice'

const AcceptDeclineRequest = ({ requestId }) => {
  const [acceptFriendRequest] = useAcceptFriendRequestMutation()
  const [declineFriendRequest] = useDeclineFriendRequestMutation()

  const handleAccept = async () => {
    await acceptFriendRequest(requestId)
  }

  const handleDecline = async () => {
    await declineFriendRequest(requestId)
  }

  return (
    <div>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  )
}

export default AcceptDeclineRequest
