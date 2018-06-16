const { matchPath } = require('react-router-dom');
const express = require('express');
const routeConf = require('../src/routes/config');

const app = express();

const handlerSSRRequest = (req, res) => {
  // res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>');
  // res.write("<div id='content'>");
  // const stream = renderToNodeStream(<MyPage />);
  // stream.pipe(res, { end: false });
  // stream.on('end', () => {
  //   res.write('</div></body></html>');
  //   res.end();
  // });
  
};

export default handlerSSRRequest;
