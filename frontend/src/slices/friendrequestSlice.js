import { apiSlice } from './apiSlice'
import { FRIEND_REQUESTS_URL } from '../constants'

export const friendRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Send a friend request
    sendFriendRequest: builder.mutation({
      query: (receiverId) => ({
        url: FRIEND_REQUESTS_URL,
        method: 'POST',
        body: { receiverId },
      }),
    }),

    // Accept a friend request
    acceptFriendRequest: builder.mutation({
      query: (requestId) => ({
        url: `${FRIEND_REQUESTS_URL}/${requestId}/accept`,
        method: 'PUT',
      }),
    }),

    // Reject a friend request
    rejectFriendRequest: builder.mutation({
      query: (requestId) => ({
        url: `${FRIEND_REQUESTS_URL}/${requestId}/reject`,
        method: 'PUT',
      }),
    }),

    // Add other friend request-related endpoints as needed
  }),
})

export const {
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
  // Add other hook names for additional endpoints here
} = friendRequestApiSlice
