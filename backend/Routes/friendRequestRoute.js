import express from 'express'
import {
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  getFriendRequests,
} from '../controllers/friendRequestController.js'
import { protect } from '../middleware/authMiddleware.js' // Assuming you have an auth middleware

const router = express.Router()

// Send a friend request
router.route('/').post(protect, sendFriendRequest)

// Accept or decline a friend request
router.route('/:requestId/accept').put(protect, acceptFriendRequest)
router.route('/:requestId/decline').put(protect, declineFriendRequest)

// Get all friend requests for a user
router.route('/').get(protect, getFriendRequests)

export default router
