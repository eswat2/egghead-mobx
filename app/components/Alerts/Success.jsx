import React from 'react';

const Success = ({salute, message}) => {
  // console.log('-- render:  Success');
  return (
    <div className="alert alert-success" role="alert"><strong>{salute}:</strong> {message}</div>
  )
}

Success.propTypes = {
  salute: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
}

export default Success;
