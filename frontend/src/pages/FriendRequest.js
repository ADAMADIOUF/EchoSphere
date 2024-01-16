import React from 'react'
import { useGetFriendSuggestionsQuery } from '../slices/usersApiSlice' // Update with the correct path
import SendFriendRequest from './SendRequest' // Import the SendFriendRequest component
import { useParams } from 'react-router-dom'

const FriendRequestsReceived = () => {
  const { id: userId } = useParams()
  const { data: friendSuggestions } = useGetFriendSuggestionsQuery(userId)
console.log(friendSuggestions);
  if (!friendSuggestions) {
    return <div>Loading friend suggestions...</div> // Handle the loading state
  }

  return (
    <div>
      <h2>Friend Requests Received</h2>
      <h3>comming soon</h3>
      <ul>
        {friendSuggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <img src={suggestion.image} alt={`${suggestion.name}'s profile`} />
            {suggestion.name}{' '}
            <SendFriendRequest userId={userId} recipientId={suggestion.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendRequestsReceived
