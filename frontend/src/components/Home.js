import React from 'react'
import { useSelector } from 'react-redux'
import TopBar from './TopBar'

const Home = () => {
 const currentTheme = useSelector((state) => state.theme.theme)

  return (
    <div>
     <TopBar/>
    </div>
  )
}

export default Home
