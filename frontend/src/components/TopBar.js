import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoIosNotifications } from 'react-icons/io' 
import { LinkContainer } from 'react-router-bootstrap'
import ThemeToggle from './Theme'
import Search from './Search'
import { logout } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import { Nav, NavDropdown } from 'react-bootstrap'
const TopBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const theme = useSelector((state) => state.theme.theme)
  const [logoutApiCall] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-4 shadow-md bg-[#ccc]'>
      <div className='flex flex-col lg:flex-row items-center mb-4 lg:mb-0 w-full lg:w-auto'>
        <h3 className='text-xl font-semibold text-gray-800 mr-4'>
          <Link to={`/home`}>EchoSphere</Link>
        </h3>
      </div>
      <div className='flex-grow lg:flex-grow-0'>
        <Search />
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle data-theme={theme} />
        <IoIosNotifications className='text-2xl text-gray-600' />{' '}
        {/* Notification Icon */}
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer to='/'>
            <Nav.Link>
              <FaUser /> Sign In
            </Nav.Link>
          </LinkContainer>
        )}
        {userInfo && userInfo.isAdmin && (
          <NavDropdown title='Admin' id='adminmenu'>
            
            
            <LinkContainer to='/admin/userlist'>
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
      </div>
    </div>
  )
}

export default TopBar
