import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useProfileMutation } from '../slices/usersApiSlice'
import Loader from '../components/Loading'
import { setCredentials } from '../slices/authSlice'
import { useUploadPostImageMutation } from '../slices/postsApiSlice'
import Loading from '../components/Loading'
import Picture from './Picture'
const Profile = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState('')
  const[ location,setLocation]=useState("")
  const [bio, setBio] = useState('')

  const { userInfo } = useSelector((state) => state.auth)
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()
    const [uploadProductImage, { isLoading: loadingUpload }] =
      useUploadPostImageMutation()
  
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name)
      setEmail(userInfo.email)
      setImage(userInfo.image)
      setBio(userInfo.bio)
      setLocation(userInfo.location)

    }
  }, [userInfo.name, userInfo.email,userInfo.image,userInfo.bio,userInfo.location, userInfo])
const uploadFileHandler = async (e) => {
  const formData = new FormData()
  formData.append('image', e.target.files[0])
  try {
    const res = await uploadProductImage(formData).unwrap()
    toast.success(res.message)
    setImage(res.image)
  } catch (error) {
    toast.error(error?.data?.message || error.error)
  }
}

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Password do not match')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
          image,
          bio,
          location

        }).unwrap()
        dispatch(setCredentials(res))
        toast.success('Profile updated Successfully')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }
  if (loadingUpload || loadingUpdateProfile) {
    return <Loading />
  }
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='bio' className='my-2'>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter bio'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='location' className='my-2'>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email' className='my-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='password' className='my-2'>
            <Form.Label>password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='confirmPassword' className='my-2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <div className='my-2'>
              <label>Image</label>
              <input
                type='text'
                placeholder="Entrez l'URL de l'image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type='file'
                label='Choisir un fichier'
                onChange={uploadFileHandler}
              />
            </div>
          </Form.Group>
          <Picture imageUrl={image} />
          <Button type='submit' variant='primary' className='my-2'>
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
    </Row>
  )
}

export default Profile
