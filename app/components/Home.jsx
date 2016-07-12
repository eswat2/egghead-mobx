import React from 'react';

const Home = () => {
  console.log('-- render:  Home');
  return (
    <h2 className="text-center">
      Search By Github Username Above <i className="fa fa-ellipsis-h"></i> <i className="fa fa-search"></i> <i className="fa fa-github"></i>
    </h2>
  )
}

export default Home;
