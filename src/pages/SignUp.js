import React from "react";

function SignUp() {
  return (
    <div>
      <div className="flex justify justify-around">
        <div className="border-1 p-10 lg:w-3/12 rounded">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        
          <input
            className="mt-5 px-2 w-full h-10 rounded border-2 text-sm focus:outline-none"
            placeholder="Mobile number, or email"
          />
          <input
            className=" mt-5 px-2 w-full h-10 rounded border-2 text-sm focus:outline-none"
            placeholder="Full Name"
          />
          <input
            className="mt-5 px-2 w-full h-10 rounded border-2  text-sm focus:outline-none"
            placeholder="Username"
          />

          <input
            className="mt-5 px-2 w-full h-10 rounded border-2  text-sm focus:outline-none"
            placeholder="Password"
          />
          <div className="mt-5 bg-blue-800 w-full h-8 rounded text-white font-semibold text-center">
            <p>Sign Up</p>
          </div>
          <div className="text-center text-gray-600">
              <p>or</p>
          </div>
          <div className="bg-blue-800 w-full h-8 rounded text-white font-semibold text-center">
            <p>Log in with Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
