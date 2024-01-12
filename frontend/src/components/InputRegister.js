import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const InputRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data)
  }

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            {...register('name', { required: 'Name is required' })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name.message}</p>
          )}
        </div>

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
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
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

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Register
        </button>
      </form>
      <div className='mt-4'>
        <span className='text-ascent-2 text-sm'>Already have an account? </span>
        <Link to='/login' className='text-blue-500 hover:text-blue-700'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default InputRegister
