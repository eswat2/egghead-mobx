import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main.jsx';
import actions from './utils/actions.jsx';

window.addEventListener('popstate', function(event) {
  const user = (event.state && event.state.username ? event.state.username : null);
  console.log(`-- popstate:  ${user}`);

  actions.updateUser(user, true);
});

console.log('-- App');

render(
  <Main />,
  document.getElementById('root')
)
