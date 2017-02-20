# react-redux-seed

Simple counter with basic configuration. Includes webpack configuration files for both production and development.

## Get Started

1. git clone `https://github.com/stfny222/react-redux-seed.git`
2. cd react-redux-seed
3. npm install
4. npm run dev
5. http://localhost:1234/
5. (npm run build)

## Some features

- [React: a JavaScript library for building user interfaces](https://facebook.github.io/react/)
- [Redux: a predictable state container for JavaScript apps](http://redux.js.org/)
- [React Redux: Official React bindings for Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
- [React Router: a complete routing library for React](https://github.com/reactjs/react-router-tutorial)
- [Webpack: a module bundler for modern JavaScript applications](http://webpack.github.io/)
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
- [Material-UI: A set of React components that implement Google's Material Design](http://www.material-ui.com)

## Directory Layout
    .
    ├── ...
    ├── src                           
    │   ├── assets                    # includes stylesheets and the base html template
    │   ├── components                # presentational components
    │   ├── containers                # container components
    │       ├── DevTools              # shows actions and state over time in development
    │       ├── Root                  # root component for dev and prod
    │       ├── ...
    │       └── routes.js             # set up routes for react-router                
    │   ├── layout                    # base layout configuration with material-ui
    │   ├── redux     
    │       ├── ducks                 # set of actions, reducer and action creators by feature
    │       ├── reducers              # root reducer
    │       └── store                 # store configuration for dev and prod
    │   └── entrypoint.js                  
    ├── .babelrc                      # babel configuration for es6
    ├── .eslintrc.json                # lint configuration for es6
    ├── .webpack.config.dev.js        # development configuration (including webpack-dev-server)
    ├── .webpack.config.prod.js       # production configuration
    └── ...

