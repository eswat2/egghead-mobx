import React from 'react';
import SearchGithub from '../SearchGithub.jsx';

const SearchContainer = () => {
  // console.log('-- render:  SearchContainer');
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
        <SearchGithub />
      </div>
    </nav>
  )
}

export default SearchContainer;
