import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router'
import Routes from '../routes'

module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
      </Provider>
    );
  }
};
