import { observable, autorun, action } from 'mobx';
import getGithubInfo from './helpers.jsx';
import fauxBase from './fauxBase.jsx';

class AppStore {
  @observable error = false;
  @observable username = null;
  @observable bio = {};
  @observable repos = [];
  @observable notes = [];
  @observable tags = [];

  @observable popState = null;

  saveUser(username) {
    if (username != null) {
      console.log(`-- saveUser:  ${username}`);
      localStorage.setItem(USER_KEY, username);
    }
  }
}

const USER_KEY  = 'AppStore.username';
const singleton = new AppStore();

const _truncatePath  = (str, pattern) => {
  return (str.indexOf(pattern) != -1) ? str.slice(str.indexOf(pattern) + pattern.length) : null;
}

const initStore = () => {
  let user = localStorage.getItem(USER_KEY);
  let parm = _truncatePath(location.pathname, '/profile/');
  let who  = ( user ? (parm && parm != user ? parm : user) : null );
  console.log(`-- initStore:  ${who}`);
  // console.log(location);
  // console.log(parm);
  singleton.username = who;
}

initStore();

export default singleton;
