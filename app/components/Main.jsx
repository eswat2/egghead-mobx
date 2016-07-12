import React from 'react';
import SearchGithub from './SearchGithub.jsx'
import Profile from './Profile.jsx';
import Danger from './Alerts/Danger.jsx';
import Success from './Alerts/Success.jsx';

import { observer } from 'mobx-react';
import store from '../utils/store.jsx';

const Main = observer(() => {
  console.log('-- render:  Main');
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub />
        </div>
      </nav>
      <div className="container">
        { store.failed == true ? <Danger salute="Error" message="user does not exist..." /> : null }
      </div>
      <div className="container">
        <Success salute="Welcome" message="search for a Github user..." />
        { Object.keys(store.bio).length > 0 ? <Profile /> : null  }
      </div>
    </div>
  )
})

export default Main;
