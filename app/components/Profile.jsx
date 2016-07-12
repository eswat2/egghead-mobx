import React from 'react';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import getGithubInfo from '../utils/helpers.jsx';

import fauxBase from '../utils/fauxBase.jsx';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      bios: {},
      repos: []
    };

    this.handleAddNote = (newNote) => this._handleAddNote(newNote);
    this.init = (username) => this._init(username);
  }

  componentDidMount() {
    // hooks to bind go here
    console.log('-- componentDidMount:  Profile');
    this.init(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    console.log('-- nextProps:')
    console.log(nextProps);

    this.init(nextProps.params.username);
  }

  _init(username) {
    getGithubInfo(username)
      .then((data) => {
        console.log('-- githubInfo');
        console.log(data);
        this.setState({
          bios: data.bios,
          repos: data.repos
        })
      });

    fauxBase.get('notes', username)
      .then((data) => {
        console.log('-- notes');
        console.log(data);
        this.setState({
          notes: data.values
        })
      });
  }

  componentWillUnmount() {
    // NOTE: nothing to do here...
  }

  _handleAddNote(newNote) {
    // update firebase with the new notes
    fauxBase.update('notes', this.props.params.username, [ ...this.state.notes, newNote ])
      .then((data) => {
        console.log('-- update');
        console.log(data);
        this.setState({
          notes: data.values
        })
      });
  }

  render() {
    console.log(`-- render:  Profile (${this.props.params.username})`);
    return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={this.props.params.username} bios={this.state.bios} />
      </div>
      <div className="col-md-4">
        <Repos username={this.props.params.username} repos={this.state.repos} />
      </div>
      <div className="col-md-4">
        <Notes
          username={this.props.params.username}
          notes={this.state.notes}
          addNote={this.handleAddNote}
          />
      </div>
    </div>
    );
  }
}

export default Profile;
