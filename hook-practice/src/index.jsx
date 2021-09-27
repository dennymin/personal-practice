import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './temp-drawer';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  )
}

function Example2() {
  return (
    <div>hi</div>
  )
}

ReactDOM.render(
  <h1>
    hi
    < Example />
    < TemporaryDrawer />
  </h1>,
  document.querySelector("#root")
)
