# LifeworkWallet
[![Build Status][travis-badge]][travis-link]
[![codecov.io][codecov-badge]][codecov-link]

This project is a generic react seed using retax. This project is production ready.
All the build process is handled by [builder-react-fullstack](https://github.com/hourliert/builder-react-fullstack).

## What does this seed include?

### Libraries:
* [retax](https://github.com/hourliert/retax)
* [React](https://facebook.github.io/react/) >15.0.0
* [Redux](http://redux.js.org/)
* [react-router](https://github.com/reactjs/react-router)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [ImmutableJS](https://facebook.github.io/immutable-js/)
* [reselect](https://github.com/reactjs/reselect)
* [redial](https://github.com/markdalgleish/redial)
* [material-ui](http://www.material-ui.com/#/)
* [radium](http://stack.formidable.com/radium/)
* [react-helmet](https://github.com/nfl/react-helmet)
* [redux-form](http://redux-form.com/5.1.0/#/?_k=t21wnx)

### Technical Features
* Server Rendering
* Inline styles with Radium
* Material Design
* Routing support
* Code splitting support
* Immutable and non immutable redux reducers support
* Built-in API Http client using [retax](https://github.com/hourliert/retax) Api module
* Dependency injection (to inject API Http clients into cctions creators and to inject actions creators into components) using [retax](https://github.com/hourliert/retax)

## Getting started

```
npm install
npm start
```

This will run the fake api backend and the frontend server.
In development, the app includes **react-hot-reload** allowing edit in real time.

## Project structure
* `./src`: Source code
* `./src/actions`: Actions creators
* `./src/components`: Presentational components (those who don't depend on redux and are very dumb!)
* `./src/config`: App config
* `./src/constants`: App constants (includes Actions names)
* `./src/helpers`: Various app helpers (eg. role and access levels checker)
* `./src/reducers`: Redux reducers
* `./src/routes`: Application routes. A route is typically a folder with the following structure:
  * `./index.js`: The **react-router** route object
  * `./container/Container.js`: The container component (this one is aware of redux)
  * `./selector/selectors.js`: Container component specific redux selectors
  * `./component/ContainerWrapper.js`: Wrapper component mediating other components (It should include only components from `./src/components`. ie: presentational components)
* `./src/selectors`: Reselect base selectors
* `./src/store`: Middlewares and store enhancers
* `./src/themes`: Theme configuration
* `./src/**/__tests__/`: Test code
* `./src/retax.config.js`: [retax](https://github.com/hourliert/retax) configuration file
* `./src/clientEntry.js`: Client entry
* `./src/serverEntry.js`: (Front-end) Server entry

## Tasks
* `npm run frontend`: Start the front-end server
* `npm start`: Start the back-end and front-end server and watch for file changes
* `npm run build`: Build the app. The output is in the ./build folder. You could run this command with these options: (eg. `npm run build -- -- --release` (don't forget the `-- --`))
  * `--release`: minify the bundle
  * `--devtools`: include **redux-devtools**
  * `--react-perf`: include **react addons perf**
  * `--isomorphic`: include server rendering
* `npm test`: Run all tests in **mocha**
* `npm run lint`: Lint the code of the component
* `npm run tdd`: Run all tests in watch mode

## Roadmap
* Migrate the seed to **typescript** when typescript@2.0.0 is out
* Migrate the test framework to **jest**. This will reduce the number of dependencies and be easier to work with mocks.

[travis-badge]: https://travis-ci.org/hourliert/lifework-wallet.svg?branch=master
[travis-link]: https://travis-ci.org/hourliert/lifework-wallet
[codecov-badge]: https://codecov.io/github/hourliert/lifework-wallet/coverage.svg?branch=master
[codecov-link]: https://codecov.io/github/hourliert/lifework-wallet?branch=master
