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

REFERENCE:

```javascript
babel-node devServer.js
webpack-dev-server

json-server --watch db.json
```
