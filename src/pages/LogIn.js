import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function LogIn() {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        if (user) {
          console.log(user.user);
          history.push("/");
        }
      })
      .catch(function (err) {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify justify-around">
      <div className="border-1 p-10 w-3/12 rounded">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <form onSubmit={login}>
          <input
            className="my-5 px-2 w-full h-8 rounded border-2 border-red text-sm focus:outline-none"
            placeholder="Phone number, username, or email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
          <br />
          <input
            className="px-2 w-full h-8 rounded border-2 border-red text-sm focus:outline-none"
            placeholder="Password"
            name="password"
            value={user.value}
            onChange={onChange}
          />
          <div
            onClick={login}
            className="my-5 bg-blue-800 w-full h-8 rounded text-white font-semibold text-center cursor-pointer"
          >
            <p>Log In</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
