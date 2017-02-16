// Accept hot module reloading
// if (process.env.NODE_ENV !== 'production') {
  // if (module.hot) {
  //   module.hot.accept()
  // }
// }

import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './redux/store';
import { Root } from './containers/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
