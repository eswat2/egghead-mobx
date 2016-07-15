import React from 'react';
import Danger from '../Alerts/Danger.jsx';

import { observer } from 'mobx-react';
import store from '../../utils/store.jsx';

const ErrorContainer = observer(() => {
  // console.log('-- render:  ErrorContainer');
  return (
    <div className="container">
      { store.error == true ? <Danger salute="Error" message="user does not exist..." /> : null }
    </div>
  )
})

export default ErrorContainer;
