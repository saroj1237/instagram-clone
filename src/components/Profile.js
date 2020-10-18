import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Profile({ userName, avatarUrl }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setOpen(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setOpen(true);
        setErrorMessage(error.message);
        console.log(error.message);
      });
    setUser({ email: "", password: "" });
    setOpen(false);
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setOpen2(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setOpen2(true);
        setErrorMessage(error.message);
        console.log(error.message);
      });
    console.log("Congratulations, You are Logged in.");
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setIsAuthenticated(false);
        alert("Log Out successful :(");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.email} is signed in`);
        setIsAuthenticated(true);
      } else {
        console.log("User is not signed in:");
        setIsAuthenticated(false);
      }
    });
  }, []);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = (e) => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={signUp}>
        <p>{errorMessage}</p>
        <div>
          <label>Email</label>
          <br />
          <input
            placeholder="Email"
            className="border-1 rounded border-yellow-600 w-full p-1 focus:outline-none"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            placeholder="Password"
            className="border-1 rounded border-yellow-600 w-full p-1 focus:outline-none focus:border-2"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div
          onClick={signUp}
          className="mt-2 p-2 bg-blue-900 cursor-pointer text-center rounded text-white font-bold text-xl hover:bg-green-600 transition ease-out bg-green-600 duration-500"
        >
          Sign up
        </div>
      </form>
    </div>
  );

  const body2 = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={login}>
        <p>{errorMessage}</p>
        <div>
          <label>Email</label>
          <br />
          <input
            placeholder="Email"
            className="border-1 rounded border-yellow-600 w-full p-1 focus:outline-none"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            placeholder="Password"
            className="border-1 rounded border-yellow-600 w-full p-1 focus:outline-none focus:border-2"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div
          onClick={login}
          className="mt-2 p-2 bg-blue-900 cursor-pointer text-center rounded text-white font-bold text-xl hover:bg-green-600 transition ease-out bg-green-600 duration-500"
        >
          Login
        </div>
      </form>
    </div>
  );

  //return ----------------------------*************************

  return (
    <div className="hidden md:block md:bg-gray-100 w-1/2">
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      <Modal open={open2} onClose={handleClose2}>
        {body2}
      </Modal>
      <div className="flex justify-end p-5">
        {!isAuthenticated ? (
          <p
            name="login"
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-gray-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={handleOpen2}
          >
            SignIn
          </p>
        ) : (
          <p
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-red-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={logout}
          >
            Logout
          </p>
        )}
        {isAuthenticated ? (
          <div></div>
        ) : (
          <p
            name="signup"
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-gray-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={handleOpen}
          >
            Signup
          </p>
        )}
      </div>
      <div className="mx-20 my-10 p-2 text-center">
        <div>
          {/* profile info */}
          <div className="flex justify-center">
            <Avatar />
          </div>
          <h4>Username</h4>
          <h3>Email</h3>
          <div className="flex justify-evenly">
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="mt-1 bg-blue-400 py-2 px-10 text-center rounded border-1 border-blue-600 cursor-pointer">
                Posts
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="mt-1 bg-blue-400 py-2 px-10 text-center rounded border-1 border-blue-600 cursor-pointer">
                Follower
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="mt-1 bg-blue-400 py-2 px-10 text-center rounded border-1 border-blue-600 cursor-pointer">
                Following
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="mt-2">
          <textarea
            className="focus:outline-none rounded w-full px-2 border-2"
            placeholder="Caption"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="file"
            className="rounded cursor-pointer focus:outline-none"
          />
          <div className="p-2 bg-blue-200 rounded cursor-pointer">Post</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
