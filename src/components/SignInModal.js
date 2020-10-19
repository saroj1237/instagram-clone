import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { auth } from "../firebase";

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

function SignInModal({ user, setUser, errorMessage, setErrorMessage }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const signUp = (e) => {
  //     e.preventDefault();
  //     auth
  //       .createUserWithEmailAndPassword(user.email, user.password)
  //       .then((authUser) => {
  //         setOpen(false);
  //         setErrorMessage("");
  //         console.log(authUser);
  //         return authUser.user.updateProfile({
  //           displayName: user.username,
  //         });
  //       })
  //       .catch((error) => {
  //         setOpen(true);
  //         setErrorMessage(error.message);
  //         console.log(error.message);
  //       });
  //     setUser({ email: "", password: "" });
  //     setOpen(false);
  //   };

  const login = () => {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        setOpen(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setOpen(true);
        setErrorMessage(error.message);
        console.log(error.message);
      });
    console.log("Congratulations, You are Logged in.");
  };

  const body = (
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

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

export default SignInModal;
