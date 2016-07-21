# egghead-mobx
my attempt to convert the Github Note Taker app to use Mobx...

[![Dependency Status](https://dependencyci.com/github/eswat2/egghead-mobx/badge)](https://dependencyci.com/github/eswat2/egghead-mobx)

NOTE: this code no longer uses firebase and re-base

I am now using [**json-server**](https://github.com/typicode/json-server) to handle reading & writing notes:

```javascript
npm install -g json-server

npm run notes
npm start
```

You can view the content of **db.json** in order to see the changes you are making to notes.

### BACKGROUND:

I took the [**Build Your First React.js App**](https://egghead.io/courses/build-your-first-react-js-application) by [Tyler McGinnis](https://github.com/tylermcginnis) on [**egghead.io**](https://egghead.io) and decided to continue refining and refactoring the app that was created in that course.  My initial thought was to convert it to [**Redux**](http://redux.js.org/), but i found that a bit daunting since i was still trying to learn **Redux**.  I found a reference to [**Mobx**](https://mobxjs.github.io/mobx/) and after reading a little about it, i decided to try that approach first.  This app is the result of that exploration.

Some of the features include:

- refined UI elements_
- a store built on [**Mobx**](https://mobxjs.github.io/mobx/)_
- uses [**axios**](https://github.com/mzabriskie/axios) for all api calls_
- a notes REST api built on top of [**json-server**](https://github.com/typicode/json-server)_
- a simple html5 pushstate mechanism_
- saves last valid username to local storage_
- initializes app from URL if it matches /profile/:username_
- otherwise it reloads last username from local storage_
- a simple navigator for visited usernames_

### DEPLOYMENT

I created another repo which contains the code required to deploy this app to [**heroku**](https://www.heroku.com/home).  You can find that here:

[**heroku-egghead-mobx**](https://github.com/eswat2/heroku-egghead-mobx)

Some of it's features include:

- embedded notes server built on [**json-server**](https://github.com/typicode/json-server)
- a proxy to route all /notes* calls to the embedded server
- code to enforce SSL, leveraging heroku's certs
- code to support the Single Page App model

The deployed app can be found here: [**egghead-mobx**](https://egghead-mobx.herokuapp.com)

### CAVEATS

_Due to the nature of the [**json-server**](https://github.com/typicode/json-server) implementation, notes are not saved between app restarts and redeploys on [**heroku**](https://www.heroku.com/home).  This is fine for a "proof-of-concept", which this is._

### REFERENCE:

```javascript
babel-node devServer.js
webpack-dev-server

json-server --watch db.json
```
