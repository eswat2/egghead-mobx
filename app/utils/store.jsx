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
}

const USER_KEY = 'AppStore.username';

const saveUser = function(username) {
  if (username != null) {
    localStorage.setItem(USER_KEY, username);
  }
}

const singleton = new AppStore();
const autoUser  = autorun(() => saveUser(singleton.username));

const initStore = () => {
  let user = localStorage.getItem(USER_KEY);
  console.log('-- initStore');
  if (user) {
    singleton.username = user;
  }
}

initStore();

export default singleton;
