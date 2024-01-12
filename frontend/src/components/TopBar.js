import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosNotifications } from 'react-icons/io' // Importing notification icon
import ThemeToggle from './Theme'
import Search from './Search'

const TopBar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/login') // Redirect to login page after logout
  }

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-4 shadow-md bg-[#ccc]'>
      <div className='flex flex-col lg:flex-row items-center mb-4 lg:mb-0 w-full lg:w-auto'>
        <h3 className='text-xl font-semibold text-gray-800 mr-4'>EchoSphere</h3>
      </div>
      <div className='flex-grow lg:flex-grow-0'>
        <Search />
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <IoIosNotifications className='text-2xl text-gray-600' />{' '}
        {/* Notification Icon */}
        <button
          onClick={handleLogout}
          className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default TopBar
