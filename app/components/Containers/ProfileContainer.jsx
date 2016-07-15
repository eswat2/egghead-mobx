import React from 'react';
import Profile from '../Profile.jsx';

import { observer } from 'mobx-react';
import store from '../../utils/store.jsx';

const ProfileContainer = observer(() => {
  // console.log('-- render:  ProfileContainer');
  return (
    <div className="container">
      { Object.keys(store.bio).length > 0 ? <Profile /> : null  }
    </div>
  )
})

export default ProfileContainer;
