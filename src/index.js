import React from 'react';
import './index.css';
import App from './App.js';
import {HashRouter} from 'react-router-dom';
import { render } from "react-dom";

render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('root')
);
