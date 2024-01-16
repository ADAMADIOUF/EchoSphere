
import asyncHandler from '../middleware/asyncHandler.js';
import FriendRequest from '../models/FriendRequestModel.js';

// Send a friend request
export const sendFriendRequest = asyncHandler(async (req, res) => {
  const { recipientId } = req.body
  const requesterId = req.user._id

  // Check for existing friend request
  const existingRequest = await FriendRequest.findOne({
    requester: requesterId,
    recipient: recipientId,
  })
  if (existingRequest) {
    res.status(400)
    throw new Error('Friend request already sent')
  }

  const friendRequest = await FriendRequest.create({
    requester: requesterId,
    recipient: recipientId,
    status: 'pending',
  })

  if (friendRequest) {
    res.status(201).json(friendRequest)
  } else {
    res.status(400)
    throw new Error('Invalid friend request data')
  }
})
// Accept a friend request
export const acceptFriendRequest = asyncHandler(async (req, res) => {
    const { requestId } = req.params;
    const request = await FriendRequest.findById(requestId);

    if (request && request.recipient.toString() === req.user._id.toString()) {
        request.status = 'accepted';
        await request.save();
        res.json(request);
    } else {
        res.status(404);
        throw new Error('Friend request not found');
    }
});

// Decline a friend request
export const declineFriendRequest = asyncHandler(async (req, res) => {
    const { requestId } = req.params;
    const request = await FriendRequest.findById(requestId);

    if (request && request.recipient.toString() === req.user._id.toString()) {
        request.status = 'declined';
        await request.save();
        res.json(request);
    } else {
        res.status(404);
        throw new Error('Friend request not found');
    }
});

// Get all friend requests for a user
export const getFriendRequests = asyncHandler(async (req, res) => {
  const friendRequests = await FriendRequest.find({
    recipient: req.user._id,
  }).populate('requester', 'name image') // Populate requester details
  res.json(friendRequests)
})