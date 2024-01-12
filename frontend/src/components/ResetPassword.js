import React from 'react'

const ResetPassword = () => {
  return (
    <div className='bg-blue-500 text-white p-4'>
      <h1 className='text-2xl font-bold'>Reset Password</h1>
      <p className='text-sm'>Enter your new password below:</p>
      <input
        className='w-full border rounded p-2 mt-2'
        type='password'
        placeholder='New Password'
      />
      <button className='bg-green-500 text-white rounded p-2 mt-4'>
        Reset
      </button>
    </div>
  )
}

export default ResetPassword
