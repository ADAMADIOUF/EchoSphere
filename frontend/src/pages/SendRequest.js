import React from 'react'
import { useSendFriendRequestMutation } from '../slices/friendrequestSlice'

const SendFriendRequest = ({ recipientId }) => {
  const [sendFriendRequest, { isLoading, isSuccess, isError }] =
    useSendFriendRequestMutation()

  const handleSendRequest = async () => {
    await sendFriendRequest({ recipientId })
  }

  return (
    <div>
      <button onClick={handleSendRequest} disabled={isLoading}>
        Send Friend Request
      </button>
      {isSuccess && <p>Request sent!</p>}
      {isError && <p>Error sending request.</p>}
    </div>
  )
}

export default SendFriendRequest
