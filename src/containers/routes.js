import Layout from '../layout'

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default {
	component: Layout,
	childRoutes: [{
		childRoutes: [
		{
			path: '/',
			getComponent(location, callback) {
				require.ensure([], (require) => {
					callback(null, require("./MainPage").default)
				}, 'mainpage.chunk')
			},
		},
		{
			path: "*",
			getComponent: (location, callback) => {
				require.ensure([], require => {
					callback(null, require("./NotFound").default)
				}, '404.chunk')
			}
		}]
	}]
}
