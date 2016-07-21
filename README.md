# egghead-mobx
my attempt to convert the Github Note Taker app to use Mobx...

[![Dependency Status](https://dependencyci.com/github/eswat2/egghead-mobx/badge)](https://dependencyci.com/github/eswat2/egghead-mobx)

NOTE: this code no longer uses firebase and re-base

We are now using `json-server` to handle reading & writing notes:

```javascript
npm install -g json-server

npm run notes
npm start
```

View the content of `db.json` in order to see the changes you are making to notes.

### COURSE:

https://egghead.io/courses/build-your-first-react-js-application

_I took the **Build Your First React.js App** on **egghead.io** and decided to continue refining and refactoring the app that was created in that course.  My initial thought was to convert it to **Redux**, but i found that a bit daunting since i was still trying to learn **Redux**.  I found a reference to **Mobx** and after reading a little about it, i decided to try that approach first.  This app is the result of that exploration._

_Some of the features include:_

- _refined UI elements_
- _a store built on **Mobx**_
- _uses **axios** for all api calls_
- _a notes REST api built on top of **json-server**_
- _a simple html5 pushstate mechanism_
- _saves last valid username to local storage_
- _initializes app from URL if it matches /profile/:username_
- _otherwise it reloads last username from local storage_
- _a simple navigator for visited usernames_

### REFERENCE:

```javascript
babel-node devServer.js
webpack-dev-server

json-server --watch db.json
```
