import React from 'react';

import { observer } from 'mobx-react';
import store from '../../utils/store.jsx';

const NotesList = observer(() => {
  console.log('-- render:  NotesList');
  const notes = store.notes;
  return (
    <ul className='list-group'>
      {notes.map((note,index) => <li className="list-group-item" key={index}>{note}</li>)}
    </ul>
  )
})

export default NotesList;
