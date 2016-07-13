import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main.jsx';
import store from './utils/store.jsx';

window.addEventListener('popstate', function(event) {
  const username = (event.state && event.state.username ? event.state.username : null);
  console.log(`-- popstate:  ${username}`);

  store.popState = { username };
});

console.log('-- App');

render(
  <Main />,
  document.getElementById('root')
)
