import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from "react-router";

import routes from './config/routes.jsx';

render(
  <Router history={ hashHistory } routes={routes} />,
  document.getElementById('root')
)
