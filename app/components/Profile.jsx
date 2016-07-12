import React from 'react';

import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';

const Profile = () => {
  console.log(`-- render:  Profile`);
  return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile />
      </div>
      <div className="col-md-4">
        <Repos />
      </div>
      <div className="col-md-4">
        <Notes />
      </div>
    </div>
  )
}

export default Profile;
