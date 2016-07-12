import React from 'react';

const NotesList = ({ notes }) => {
  console.log('-- render:  NotesList');
  return (
    <ul className='list-group'>
      {notes.map((note,index) => <li className="list-group-item" key={index}>{note}</li>)}
    </ul>
  )
}

export default NotesList;
