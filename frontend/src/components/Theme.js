import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../slices/themeSlice'
import { FaMoon, FaSun } from 'react-icons/fa' // Importing icons

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.theme.theme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className='theme-toggle flex justify-center items-center'>
      <button onClick={handleToggleTheme} className='flex items-center gap-2'>
        {currentTheme === 'light' ? (
          <>
            <FaMoon /> 
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <FaSun /> {/* Sun icon for light mode */}
            <span>Light Mode</span>
          </>
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
