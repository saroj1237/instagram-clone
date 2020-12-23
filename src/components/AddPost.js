import React, { useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function AddPost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function.
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
            });
          });
      }
    );
  };

  return (
    <div className="flex justify-center">
      <form className="lg:w-1/2" onSubmit={handleUpload}>
        <div className="mt-2 ">
          <textarea
            className="focus:outline-none rounded w-full px-2 border-2"
            placeholder="Caption"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <input
            type="file"
            className="rounded cursor-pointer focus:outline-none"
            onChange={handleChange}
          />
          <div
            onClick={handleUpload}
            className="p-2 bg-blue-200 rounded cursor-pointer"
          >
            Post
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
