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

const singleton = new AppStore();

export default singleton;
