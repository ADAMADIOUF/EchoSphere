import React from 'react'

import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
     
      <main>
       
          <Outlet />
       
      </main>
      
      <ToastContainer />
    </>
  )
}

export default App
