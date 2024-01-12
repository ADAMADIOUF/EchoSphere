import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom' 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    
    console.log(data)
  }

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm'>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: /^\S+@\S+$/i,
            })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            {...register('password', { required: 'Password is required' })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.password && (
            <p className='text-red-500 text-xs italic'>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Sign In
          </button>
          <Link
            to='/reset-password'
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <div className='mt-4'>
        <span className='text-ascent-2 text-sm'>Don't have an account? </span>
        <Link to='/register' className='text-blue-500 hover:text-blue-700'>
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login
