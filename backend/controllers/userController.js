import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js'
const authUser = asyncHandler(async (req, res) => {
  const { email, password} = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bio:user.bio,
      location:user.location,
      image:user.image,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error(`Invalid email or password`)
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body

  // Check if the user already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Check if the registering user should be an admin
  let isAdmin = false
  if (email === 'admin@gmail.com') {
    isAdmin = true
  }

  // Create the user
  const user = await User.create({
    name,
    email,
    password,
    isAdmin, // set the isAdmin flag
  })

  if (user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: `Logout successfully` })
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      bio: user.bio,
      location: user.location,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error(`User not found`)
  }
})
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.bio = req.body.bio || user.bio
    user.location = req.body.location || user.location

    user.email = req.body.email || user.email
    user.image = req.body.image || user.image
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      bio: updatedUser.bio,
location:updatedUser.location,
      email: updatedUser.email,
      image: updatedUser.image,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
})
const getUserByID = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    if (user.isAdmin) {
      res.status(400)
      throw new Error('Cant delete admin user')
    }
    await User.deleteOne({ _id: user._id })
    res.status(200).json({ message: 'User deleted successfully' })
  } else {
    res.status(404)
    throw new error('User not found')
  }
})
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = Boolean(req.body.isAdmin)
    const updatedUser = await user.save()
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not  found')
  }
})
// Send a friend request
 const sendFriendRequest = async (req, res) => {
  try {
    const { userId, recipientId } = req.body;
    
    // Add recipientId to the sender's friendRequestsSent array
    await User.findByIdAndUpdate(userId, { $push: { friendRequestsSent: recipientId } });
    
    // Add userId to the recipient's friendRequestsReceived array
    await User.findByIdAndUpdate(recipientId, { $push: { friendRequestsReceived: userId } });

    res.status(200).json({ message: 'Friend request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending friend request' });
  }
};

// Handle friend requests received
 const handleFriendRequest = async (req, res) => {
  try {
    const { userId, senderId, accept } = req.body;

    if (accept) {
      // If the user accepts the friend request, add senderId to their followers and followings arrays
      await User.findByIdAndUpdate(userId, { $push: { followers: senderId, followings: senderId } });
      await User.findByIdAndUpdate(senderId, { $push: { followers: userId, followings: userId } });
    }

    // Remove senderId from userId's friendRequestsReceived array
    await User.findByIdAndUpdate(userId, { $pull: { friendRequestsReceived: senderId } });

    res.status(200).json({ message: 'Friend request handled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error handling friend request' });
  }
};

// Get friend suggestions (you can implement your logic for suggesting friends here)
  const getFriendSuggestions = async (req, res) => {
  try {
    // Implement your logic to get friend suggestions based on user interests, connections, etc.
    const userId = req.params.userId;
    const suggestions = []; // Add your suggested friends to this array

    res.status(200).json(suggestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching friend suggestions' });
  }
};
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
  sendFriendRequest,
  handleFriendRequest,
  getFriendSuggestions,
}
