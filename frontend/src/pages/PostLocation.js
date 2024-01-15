import React from 'react'
import { useSelector } from 'react-redux'
import defaultProfileImg from '../assets/profile.png'
import { FaBiohazard, FaLocationArrow } from 'react-icons/fa'

const PostLocation = () => {
  const { userInfo } = useSelector((state) => state.auth)

  return (
    <div className='user-profile-details'>
      {userInfo && (
        <>
          <img
            src={userInfo.image || defaultProfileImg}
            alt={userInfo.name || 'Default Profile'}
            className='profile-picture'
          />
          <h2>{userInfo.name}</h2>
          {userInfo.bio && (
            <div>
              <FaBiohazard /> <span>{userInfo.bio}</span>
            </div>
          )}
          {userInfo.location && (
            <div>
              <FaLocationArrow /> <span>{userInfo.location}</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default PostLocation
