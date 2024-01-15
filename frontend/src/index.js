import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home';
import Profile from './pages/Profile';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import PrivateRoute from './components/PrivateRoute';
import GetPost from './pages/GetPost';
import PostContent from './pages/PostContent';
import AdminRoute from './components/AdminRoute';
import UserEdit from './pages/UserEdit';
import UserList from './pages/UserList';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Login />} />

      <Route path='register' element={<Register />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search/:keyword' element={<GetPost />} />
        <Route path='/page/:pageNumber' element={<PostContent />} />
      </Route>
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/userlist' element={<UserList />} />
        <Route path='/admin/user/:id/edit' element={<UserEdit />} />
      </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
