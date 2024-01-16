import React from 'react'
import {
  useGetUsersQuery,
  useSendFriendRequestMutation,
} from '../slices/usersApiSlice' // Update with the correct path
import { toast } from 'react-toastify'

const UserList = () => {
  const { data: users, isLoading } = useGetUsersQuery() // Use isLoading to check loading state
  const [sendFriendRequestMutation] = useSendFriendRequestMutation()

  const handleSendFriendRequest = async (recipientId) => {
    try {
      await sendFriendRequestMutation({ userId: recipientId })
      toast.success('Friend request sent successfully')
    } catch (error) {
      toast.error('Error sending friend request')
    }
  }

  if (isLoading) {
    return <div>Loading...</div> // Display a loading indicator while data is being fetched
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <img src={user.image} alt={`${user.name}'s profile`} />
            {user.name}{' '}
            <button onClick={() => handleSendFriendRequest(user._id)}>
              Add Friend
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
