import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from '../layout'
import Main from './MainPage'
import NotFound from './NotFound'

const redirect = () => {
  if (location.pathname=='/') {
    location.pathname = '/index'
  }
}

const routes = (
		<Route path='/' component={ Layout } onEnter={ redirect } >
			<Route path='/index' component={ Main } />
			<Route path='*' component={ NotFound } />
		</Route>
)

export default routes
