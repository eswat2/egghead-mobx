import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main.jsx';

render(
  <Main />,
  document.getElementById('root')
)
