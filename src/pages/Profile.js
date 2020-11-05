import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Avatar } from "@material-ui/core";
import AddPost from "../components/AddPost";
import SignInModal from "../components/SignUpModal";
import SignUpModal from "../components/SignInModal";

function Profile() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        console.log(`${user.username} is signed in`);
        // console.log(user);
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

  //return ----------------------------*************************

  return (
    <div class="md:flex bg-white justify-center rounded-lg p-6">
      <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.0-9/91953185_2580005198922731_1513311652068458496_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=qHOs0qpJKAgAX9ro0Wz&_nc_oc=AQmrDSdXSIYZiTHPl3_E7nfs5MxvYq1eiCTxJ2F0a0VTT0QIeNJcgo4ITLaF7Iv1pYk&_nc_ht=scontent.fbwa1-1.fna&oh=d38f1b8930f3ed3170cade051f79d87b&oe=5FC79FCD"
      />
      <div class="text-center md:text-left">
        <h2 class="text-lg">Erin Lindford</h2>
        <div class="text-purple-500">Product Engineer</div>
        <div class="text-gray-600">erinlindford@example.com</div>
        <div class="text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  );
}

export default Profile;
