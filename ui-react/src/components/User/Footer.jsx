import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
<div className="min-h-[60px] absolute bottom-0 w-screen bg-black flex overflow-hidden flex-col md:flex-row md:items-center md:justify-between">
      <div className="">
        <h4 className="text-white md:text-xl text-base flex justify-center">
          &copy; 2024 BlueFunds.Inc. All rights reserved.{" "}
        </h4>

      </div>
      <div className="flex flex-row text-white items-center justify-center md:space-x-10 md:text-xl space-x-2">
        <p>FAQ</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex flex-row md:space-x-4 justify-center items-center space-x-2 md:mr-8">
        <SocialIcon url="https://twitter.com" target="_blank" style={{height:'40px', width:'40px'}}/>
        <SocialIcon url="https://facebook.com" target="_blank" style={{height:'40px', width:'40px'}} />
        <SocialIcon url="https://instagram.com" target="_blank" style={{height:'40px', width:'40px'}} />
      </div>
    </div>
  );
};

export default Footer;
