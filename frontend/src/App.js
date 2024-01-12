import React from 'react'
import { Routes, Route,Navigate,useLocation, Outlet } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import { useSelector } from 'react-redux'
import ThemeToggle from './components/Theme'

function Layout(){
  const user =null
  const location =useLocation()
  return user?.token?(
    <Outlet/>
  ):(
    <Navigate to="/" state={{from:location}} replace></Navigate>
  )
}
const App = () => {
  const currentTheme = useSelector((state) => state.theme.theme)

  return (
    <div data-theme={currentTheme}>
      <ThemeToggle/>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
        {/* </Route> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App
