import React, { useState } from 'react'
import { SocialIcon } from "react-social-icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      console.log('Login Response:', response);
      console.log('Role:', response.data.role);

      if (response.status === 200) {
        const token = response.data.token;
        const userEmail = email;
        const role = response.data.role;

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('authToken', token);

        if (role === 'Admin') {
          navigate('/admin');
        } else {
          navigate('/dash');
        }
      } else {
        console.error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while logging in. Please try again.', error);
    }
  };


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
              value={email}
              autoComplete
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </fieldset>
        
        <fieldset>
          <legend className="text-black">Password</legend>
          <label className="text-black">
            <input
              className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
              placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </fieldset>
        
      </div>
      <div className="flex flex-col items-center gap-3">
        
        <button className="border border-gray-400  pt-1 pb-1 pl-2 pr-2 text-sm md:px-5 md:py-3 hover:bg-green-600 hover:text-white" onClick={handleLogin}>
          Login
        </button>
        <p className="text-sm md:text-base">Login with social accounts</p>
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
        <NavLink to="/register" >
        <div className='text-xs md:text-base'>
          <p>Don't have an account ?</p>
        </div>
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default Login