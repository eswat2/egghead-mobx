import React from 'react';

import { observer } from 'mobx-react';
import actions from '../utils/actions.jsx';
import store from '../utils/store.jsx';

const NAV_STYLE = {
  marginRight: 2,
  cursor: 'pointer'
}

const Navigator = observer(() => {
  // console.log('-- render:  Navigator');
  return (
    <div>
      {store.tags.map((tag,index) => <span className="label label-info" style={NAV_STYLE} key={index} onClick={() => actions.updateUser(tag)}>{tag}</span>)}
    </div>
  )
})

export default Navigator;
