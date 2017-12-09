const { matchPath } = require('react-router-dom');
const express = require('express');
const routeConf = require('../src/routes/config');

const app = express();

app.get('/', (req, res) => {
  const promises = [];
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routeConf.some((route) => {
    // use `matchPath` here
    const match = matchPath(req.url, route);
    if (match) { promises.push(route.loadData(match)); }
    return match;
  });
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
