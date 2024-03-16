import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen font-Montserrat">
      <div className="flex flex-col bg-black min-h-[28rem] min-w-[20rem] md:min-h-[40rem] md:min-w-[27rem]">
        <div className=" bg-white">
        <input className="w-3/4 "placeholder="email">
        </input>
        <input placeholder="password">
        </input>
        </div>
      </div>
    </div>
  );
};

export default Register;
