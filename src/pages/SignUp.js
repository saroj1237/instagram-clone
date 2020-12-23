import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const creatUser = () => {
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((authUser) => {
        console.log(authUser);
        return authUser.user.updateProfile({
          displayName: user.username,
        });
      })
      .catch((err) => console.log(err));
    console.log("signed up");
  };

  return (
    <div>
      <div className="flex justify justify-around">
        <div className="border-1 p-10 lg:w-3/12 rounded">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          <form onSubmit={creatUser}>
            <input
              className="mt-5 px-2 w-full h-10 rounded border-2 text-sm focus:outline-none"
              placeholder="Mobile number, or email"
              value={user.email}
              name="email"
              onChange={onChange}
            />
            <input
              className=" mt-5 px-2 w-full h-10 rounded border-2 text-sm focus:outline-none"
              placeholder="Full Name"
              value={user.fullName}
              name="fullName"
              onChange={onChange}
            />
            <input
              className="mt-5 px-2 w-full h-10 rounded border-2  text-sm focus:outline-none"
              placeholder="Username"
              value={user.username}
              name="username"
              onChange={onChange}
            />

            <input
              className="mt-5 px-2 w-full h-10 rounded border-2  text-sm focus:outline-none"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={onChange}
            />
            <div
              onClick={creatUser}
              className="mt-5 bg-blue-800 w-full h-8 rounded text-white font-semibold text-center cursor-pointer"
            >
              <p>Sign Up</p>
            </div>
            <div className="text-center text-gray-600">
              <p>or</p>
            </div>
          </form>
          <div className="bg-blue-800 w-full h-8 rounded text-white font-semibold text-center cursor-pointer">
            <p>Log in with Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
