import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
  getFriendSuggestions,
  handleFriendRequest,
  sendFriendRequest,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.route(`/`).post(registerUser).get(protect, admin, getUsers)
router.post(`/logout`, logoutUser)
router.post(`/login`, authUser)
router
  .route(`/profile`)
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route(`/:id`)
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser)
router.post('/sendFriendRequest', sendFriendRequest)

// Handle friend requests received (protected route)
router.post('/handleFriendRequest',  handleFriendRequest)

// Get friend suggestions (protected route)
router.get('/getFriendSuggestions/:userId', getFriendSuggestions)
export default router
