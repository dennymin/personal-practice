import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Entries from './entries';

ReactDOM.render(
  < Clock />,
  document.querySelector('#clock')
)

ReactDOM.render(
  < Entries />,
  document.querySelector('#entries')
)
