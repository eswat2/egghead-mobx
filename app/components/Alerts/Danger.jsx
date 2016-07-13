import React from 'react';

const Danger = ({salute, message}) => {
  // console.log('-- render:  Danger');
  return (
    <div className="alert alert-danger" role="alert"><strong>{salute}:</strong> {message}</div>
  )
}

Danger.propTypes = {
  salute: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
}

export default Danger;
