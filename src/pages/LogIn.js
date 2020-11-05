import React from "react";

function LogIn() {
  return (
    <div className="flex justify justify-around">
      <div className="border-1 p-10 w-3/12 rounded">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <input
          className="my-5 px-2 w-full h-8 rounded border-2 border-red text-sm focus:outline-none"
          placeholder="Phone number, username, or email"
        />
        <br />
        <input
          className="px-2 w-full h-8 rounded border-2 border-red text-sm focus:outline-none"
          placeholder="Password"
        />
        <div className="my-5 bg-blue-800 w-full h-8 rounded text-white font-semibold text-center">
          <p>Log In</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
