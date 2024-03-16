import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200 font-Montserrat">
      <div className='w-3/12 h-4/6 custom-box-shadow bg-white'>
        <h2 className='text-5xl text-center pt-5'>Login</h2>
        <div className='flex flex-col bg-white justify-end items-center mt-24'>
            <input className=" placeholder:text-slate-400 mb-2 w-[20vw] bg-slate-500 px-4 py-2 rounded-lg block" placeholder="Email" type="text" name="search" autoComplete='off'>

            </input>
            <input className='mb-2 bg-slate-500 px-4 py-2 w-[20vw] rounded-lg block' placeholder='password' type='password'>

            </input>
        </div>
      </div>
    </div>
  )
}

export default Login