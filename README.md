# br-esri-boilerplate
---
### Get Started
1. `"yarn run start" in terminal`
2. `the site will launch in browser at localhost:8080, or the next open port in the 808x range`

## yarn Scripts
---
+ `yarn run start`

 Bundles and serves application in development environment. Watches for changes in `src` and `webpack.config.js`

+ `yarn run build`

 Bundles application in production environment. Consist of additional [Webpack](https://webpack.js.org/ "Webpack") processes such as minifying, extracting CSS and gzip.

+ `yarn run debug`

  Runs node debugger to inspect issues with [Webpack](https://webpack.js.org/ "Webpack").

+ `yarn run lint:js`

  Lints `*.js` files in `app` folder using according to specifications in `.eslintrc` file.

+ `yarn run fix:lint:js`

  Fixes lint errors.

+ `yarn run test:jest:watch`

  Runs [Jest](https://facebook.github.io/jest/ "Jest") in watch mode.

+ `yarn run test:jest`

  Runs [Jest](https://facebook.github.io/jest/ "Jest")

+ `yarn run clean:build`

  Deletes contents of `build` folder

## Development
---
Application utilizes [React](https://facebook.github.io/react/ "React") for building user interfaces, [Redux](http://redux.js.org/ "Redux") for state management.
