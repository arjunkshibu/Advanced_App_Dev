import React from 'react'
import { SocialIcon } from "react-social-icons";


const Login = () => {
  return (
    <div className="flex items-center gap-0 flex-row justify-center h-screen font-Montserrat">
    <div className="flex flex-col items-center justify-evenly  custom-box-shadow min-h-[35rem] min-w-[20rem] md:min-h-[45rem] md:min-w-[27rem]">
      <h1 className="h-1/4 text-black flex text-3xl md:text-5xl">Login</h1>
      <div className="h-3/4 flex flex-col items-center justify-center md:gap-10 gap-7">
        
        <fieldset>
          <legend className="text-black">Email</legend>
          <label className="text-black">
            <input
              className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
              placeholder="Email"
            />
          </label>
        </fieldset>
        
        <fieldset>
          <legend className="text-black">Password</legend>
          <label className="text-black">
            <input
              className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
              placeholder="Password"
            />
          </label>
        </fieldset>
        
      </div>
      <div className="flex flex-col items-center gap-3">
        
        <button className="border border-gray-400  pt-1 pb-1 pl-2 pr-2 text-sm md:p-2 hover:bg-green-700">
          Register
        </button>
        <p className="text-sm md:text-base">Register with social accounts</p>
        <div className="flex flex-row md:space-x-4 justify-center items-center space-x-2">
          <SocialIcon
            url="https://linkedin.com"
            target="_blank"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="https://facebook.com"
            target="_blank"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="https://google.com"
            target="_blank"
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className='text-xs md:text-base underline'>
          <p>Forgot password</p>
        </div>
        <div className='text-xs md:text-base'>
          <p>Don't have an account ?</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login