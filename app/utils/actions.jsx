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
      console.log('-- update');
      console.log(data);

      store.notes = data.values;
    });
});

const fetchNotes = action((username) => {
  console.log(`-- fetchNotes:  ${username}`);
  store.notes = [];
  if (username) {
    fauxBase.get('notes', username)
      .then((data) => {
        console.log('-- notes');
        console.log(data);

        store.notes = data.values;
      })
  }
});

const fetchGithub = action((username) => {
  console.log(`-- fetchGithub:  ${username}`);
  store.bio   = {};
  store.repos = [];
  if (username) {
    getGithubInfo(username)
      .then((data) => {
        console.log('-- githubInfo');
        console.log(data);

        store.bio   = data.bio;
        store.repos = data.repos;
        store.error = data.error;

        if (!store.error) {
          store.saveUser(username);
          
          if (!store.tags.includes(username)) {
            let list = [ ...store.tags, username ].sort();
            store.tags = list;
          }
        }
      })
  }
});

const autoGithub = autorun(() => fetchGithub(store.username) );
const autoNotes  = autorun(() => fetchNotes(store.username) );

const actions = {
  addNote,
  updateUser
};

export default actions;
