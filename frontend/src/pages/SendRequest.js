import React from 'react'
import { useSendFriendRequestMutation } from '../slices/usersApiSlice' // Update with the correct path
import { toast } from 'react-toastify'

const SendFriendRequest = ({ userId, recipientId }) => {
  const [sendFriendRequestMutation] = useSendFriendRequestMutation()

  const handleSendFriendRequest = async () => {
    try {
      await sendFriendRequestMutation({ userId, recipientId })
      toast.success('Friend request sent successfully')
    } catch (error) {
      toast.error('Error sending friend request')
    }
  }

  return <button onClick={handleSendFriendRequest}>Send Friend Request</button>
}

export default SendFriendRequest
