import { apiSlice } from './apiSlice'
import { FRIEND_REQUESTS_URL } from '../constants'

export const friendRequestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendFriendRequest: builder.mutation({
      query: ({ recipientId }) => ({
        url: FRIEND_REQUESTS_URL,
        method: 'POST',
        body: { recipientId },
      }),
      invalidatesTags: ['FriendRequests'],
    }),
    acceptFriendRequest: builder.mutation({
      query: (requestId) => ({
        url: `${FRIEND_REQUESTS_URL}/accept/${requestId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['FriendRequests'],
    }),
    declineFriendRequest: builder.mutation({
      query: (requestId) => ({
        url: `${FRIEND_REQUESTS_URL}/decline/${requestId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['FriendRequests'],
    }),
    getFriendRequests: builder.query({
      query: () => ({
        url: FRIEND_REQUESTS_URL,
        method: 'GET',
      }),
      providesTags: ['FriendRequests'],
    }),
  }),
})

export const {
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
  useGetFriendRequestsQuery,
} = friendRequestApiSlice
