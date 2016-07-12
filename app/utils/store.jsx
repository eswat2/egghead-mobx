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

  saveUser(username) {
    if (username != null) {
      localStorage.setItem(USER_KEY, username);
    }
  }
}

const USER_KEY  = 'AppStore.username';
const singleton = new AppStore();

const initStore = () => {
  let user = localStorage.getItem(USER_KEY);
  console.log('-- initStore');
  if (user) {
    singleton.username = user;
  }
}

initStore();

export default singleton;
