import React from 'react'

const LoginCardComponent = () => {
  return (
    <div className='max-w-sm shadow-xl h-96 w-70 mx-auto my-20 bg-white border border-red-500'>
        <div className='flex flex-col gap-5 p-5 mx-auto'>
          <input type='text' placeholder="enter uername" className='h-10 w-80 border border-black-500 rounded-md'></input>
          <input type='text' placeholder="enter password" className=' h-10 w-80 border border-black-500 rounded-md'></input>
        </div>
    </div>
  )
}

export default LoginCardComponent
