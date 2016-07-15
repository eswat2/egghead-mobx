import React from 'react';

import ErrorContainer from './Containers/ErrorContainer.jsx';
import NavigatorContainer from './Containers/NavigatorContainer.jsx';
import ProfileContainer from './Containers/ProfileContainer.jsx';
import SearchContainer from './Containers/SearchContainer.jsx';

const Main = () => {
  // console.log('-- render:  Main');
  return (
    <div className="main-container">
      <SearchContainer />
      <ErrorContainer />
      <NavigatorContainer />
      <ProfileContainer />
    </div>
  )
}

export default Main;
