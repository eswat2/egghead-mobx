import React from 'react';
import NotesList from './NotesList.jsx';
import AddNote from './AddNote.jsx';

import { observer } from 'mobx-react';
import store from '../../utils/store.jsx';

const Notes = observer(() => {
  console.log('-- render:  Notes');
  const username = store.username;
  return (
    <div>
      <h3>Notes for {username} </h3>
      <AddNote />
      <NotesList />
    </div>
  )
})

export default Notes;
