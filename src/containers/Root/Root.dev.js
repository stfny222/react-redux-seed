import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router'
import Routes from '../routes'
import DevTools from '../DevTools';

module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} routes={Routes} />
          {/* Being the dev version of our Root component, we include DevTools below */}
          <DevTools />
        </div>
      </Provider>
    );
  }
};
