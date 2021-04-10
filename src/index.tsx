/*=========================================
Renders Root component on the DOM.
=========================================*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './resources/styles/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
