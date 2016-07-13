import React from 'react';

import { observer } from 'mobx-react';
import store from '../../utils/store.jsx';

const chk4num = (val) => {
  return (val != null && val > 0);
}

const UserProfile = observer(() => {
  // console.log('-- render:  UserProfile');
  const bio = store.bio;
  return (
    <div>
      <h3>User Profile</h3>
      {bio.avatar_url && <li className="list-group-item"> <img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
      {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
      {bio.login && <li className="list-group-item">Username: {bio.login}</li>}
      {bio.email && <li className="list-group-item">Email: {bio.email}</li>}
      {bio.location && <li className="list-group-item">Location: {bio.location}</li>}
      {bio.company && <li className="list-group-item">Company: {bio.company}</li>}
      {chk4num(bio.followers) && <li className="list-group-item">Followers: {bio.followers}</li>}
      {chk4num(bio.following) && <li className="list-group-item">Following: {bio.following}</li>}
      {chk4num(bio.public_repos) && <li className="list-group-item">Public Repos: {bio.public_repos}</li>}
      {bio.blog && <li className="list-group-item">Blog: <a href={bio.blog}> {bio.blog}</a></li>}
    </div>
  )
});

export default UserProfile;
