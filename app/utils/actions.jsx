import { action, autorun } from 'mobx';
import fauxBase from './fauxBase.jsx';
import getGithubInfo from './helpers.jsx';
import store from './store.jsx';

const updateUser = action((username) => {
  console.log(`-- updateUser:  ${username}`);
  store.username = username;
});

const addNote = action((newNote) => {
  // update firebase with the new notes
  fauxBase.update('notes', store.username, [ ...store.notes, newNote ])
    .then((data) => {
      console.log('-- api::notes [ update ]');
      console.log(data);

      store.notes = data.values;
    });
});

const _pushState = action((username) => {
  if (store.popState == null) {
    history.pushState({ username }, username, `/profile/${username}`);
  } else {
    store.popState = null;
  }
});

const _fetchNotes = action((username) => {
  console.log(`-- fetchNotes:  ${username}`);
  store.notes = [];
  if (username) {
    fauxBase.get('notes', username)
      .then((data) => {
        console.log('-- api::notes [ get ]');
        console.log(data);

        store.notes = data.values;
      })
  }
});

const _fetchGithub = action((username) => {
  console.log(`-- fetchGithub:  ${username}`);
  store.bio   = {};
  store.repos = [];
  if (username) {
    getGithubInfo(username)
      .then((data) => {
        console.log('-- api::githubInfo');
        console.log(data);

        store.bio   = data.bio;
        store.repos = data.repos;
        store.error = data.error;

        if (!store.error) {
          store.saveUser(username);
          _pushState(username);

          if (!store.tags.includes(username)) {
            let list = [ ...store.tags, username ].sort();
            store.tags = list;
          }
        }
      })
  }
  else {
    store.popState = null;
  }
});

const _popHandler = action((pop) => {
  if (pop) {
    updateUser(pop.username)
  }
});

const autoGithub = autorun(() => _fetchGithub(store.username) );
const autoNotes  = autorun(() => _fetchNotes(store.username) );
const autoPop    = autorun(() => _popHandler(store.popState) );

const actions = {
  addNote,
  updateUser
};

export default actions;
