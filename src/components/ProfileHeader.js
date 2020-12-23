import React from 'react'
import ProfileButtons from "../components/ProfileButtons";


function ProfileHeader({currentUser}) {
    return (
        <div className="profile-header">
        <img src={currentUser.profilImage} />
        <div>
          <div className="profile-flex">
            <div>
              <b>32</b>
              <div>Posts</div>
            </div>
            <div>
              <b>288</b>
              <div>Followors</div>
            </div>
            <div>
              <b>233</b>
              <div>Followiing</div>
            </div>
          </div>
          <b>{currentUser.username}</b>
          <pre>{currentUser.bio}</pre>
          <ProfileButtons isfollowing={currentUser.isFollowing} userId={currentUser.id} />
        </div>
      </div>
    )
}

export default ProfileHeader
