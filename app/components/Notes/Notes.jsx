import React from 'react';
import NotesList from './NotesList.jsx';
import AddNote from './AddNote.jsx';

const Notes = ({ username, notes, addNote }) => {
  console.log('-- render:  Notes');
  return (
    <div>
      <h3>Notes for {username} </h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;
