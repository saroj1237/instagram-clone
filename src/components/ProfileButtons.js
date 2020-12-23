import React from "react";

function ProfileButtons({ isProfile }) {

  return (
    <div className="profile-buttons">
      {isProfile ? (
        <button id="follow">Follow</button>
      ) : (
        <>
          <button id="unfollow">Unfollow</button>
          {/* <button id="edit-profile">Edit Profile</button> */}
          <button id="message">Message</button>
        </>
      )}
    </div>
  );
}

export default ProfileButtons;
