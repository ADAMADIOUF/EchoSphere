import React from 'react'
import a from '../assets/register.png'
import { TbSocial } from 'react-icons/tb'

import InputRegister from './InputRegister'
const Register = () => {
  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
        <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2 bg-[#065ad8] rounded text-white'>
              <TbSocial />
            </div>
            <span className='text-2xl text-[#065ad8]'>EchoSphere</span>
          </div>
          <p className='text-ascent-1 text-base font-semibold'>
            log in your account
          </p>
          <span className='text-sm mt-2 text-ascent-2'>welcom back</span>
          <form className='py-8 flex flex-col gap-5'>
            <InputRegister />
          </form>
        </div>
        <div className='hidden lg:block lg:w-1/2 h-full'>
          <img
            src={a}
            alt='Login Visual'
            className='object-cover h-full w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Register
