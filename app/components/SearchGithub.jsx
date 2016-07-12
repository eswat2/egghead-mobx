import React from 'react';
import { withRouter } from 'react-router';

class SearchGithub extends React.Component {
  constructor(props, context) {
    super(props);
    this.input = null;

    this.getRef = (ref) => this._getRef(ref);
    this.handleSubmit = () => this._handleSubmit();
  }

  _getRef(ref) {
    this.input = ref;
  }

  _handleSubmit() {
    const user = this.input.value;
    this.input.value = '';
    this.props.router.push(`/profile/${user}`);
  }

  render() {
    console.log('-- render:  SearchGithub');
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchGithub);
