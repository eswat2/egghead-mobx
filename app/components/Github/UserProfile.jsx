import React from 'react';

const chk4num = (val) => {
  return (val != null && val > 0);
}

const UserProfile = ({bios}) => {
  console.log('-- render:  UserProfile');
  return (
    <div>
      <h3>User Profile</h3>
      {bios.avatar_url && <li className="list-group-item"> <img src={bios.avatar_url} className="img-rounded img-responsive"/></li>}
      {bios.name && <li className="list-group-item">Name: {bios.name}</li>}
      {bios.login && <li className="list-group-item">Username: {bios.login}</li>}
      {bios.email && <li className="list-group-item">Email: {bios.email}</li>}
      {bios.location && <li className="list-group-item">Location: {bios.location}</li>}
      {bios.company && <li className="list-group-item">Company: {bios.company}</li>}
      {chk4num(bios.followers) && <li className="list-group-item">Followers: {bios.followers}</li>}
      {chk4num(bios.following) && <li className="list-group-item">Following: {bios.following}</li>}
      {chk4num(bios.public_repos) && <li className="list-group-item">Public Repos: {bios.public_repos}</li>}
      {bios.blog && <li className="list-group-item">Blog: <a href={bios.blog}> {bios.blog}</a></li>}
    </div>
  )
}

UserProfile.propTypes = {
 username: React.PropTypes.string.isRequired,
 bios: React.PropTypes.object.isRequired
};

export default UserProfile;
