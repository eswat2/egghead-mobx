import React from 'react';

import actions from '../utils/actions.jsx';

class SearchGithub extends React.Component {
  constructor(props, context) {
    super(props);
    this.input = null;

    this.getRef = (ref) => this._getRef(ref);
    this.handleSubmit = (event) => this._handleSubmit(event);
  }

  _getRef(ref) {
    this.input = ref;
  }

  _handleSubmit(event) {
    event.preventDefault();
    const user = this.input.value;
    this.input.value = '';
    actions.updateUser(user);
  }

  render() {
    // console.log('-- render:  SearchGithub');
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit} >
          <div className="form-group col-sm-7">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-search"></i></div>
              <input type="text" className="form-control" ref={this.getRef} placeholder="Username" />
            </div>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github <i className="fa fa-github"></i></button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub;
