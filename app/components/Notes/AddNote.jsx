import React from 'react';
import actions from '../../utils/actions.jsx';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;

    this.setRef = (ref) => this._setRef(ref);
    this.handleSubmit = () => this._handleSubmit();
  }

  _setRef(ref) {
    this.input = ref;
  }

  _handleSubmit() {
    let newNote = this.input.value;
    this.input.value = '';
    actions.addNote(newNote);
  }

  render() {
    console.log('-- render:  AddNote');
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder=""
          ref={this.setRef}
          />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleSubmit}
            >
            Submit
          </button>
        </span>
      </div>
    )
  }
}

export default AddNote;
