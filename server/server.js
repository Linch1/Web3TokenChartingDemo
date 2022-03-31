const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

var compression = require('compression'); // speed emprovement
var helmet = require('helmet');


app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(express.static(path.join(__dirname, '../', 'build-old')));
app.use(compression({ level: 6, threshold: 0 }));
app.use(helmet());

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  res.setHeader("Content-Security-Policy", "img-src * data: blob: ");

  res.removeHeader("Cross-Origin-Resource-Policy");
  res.removeHeader("Cross-Origin-Embedder-Policy");
  next();
});


app.get('/', function (req, res) {
  let toRender = path.join(__dirname, '../', 'build', 'index.html');
  if ( fs.existsSync(toRender) ) 
    res.sendFile(toRender);
  else 
    res.sendFile(path.join(__dirname, '../', 'build-old', 'index.html'));
});
app.get('*', function (req, res) {
  let toRender = path.join(__dirname, '../', 'build', 'index.html');
  if ( fs.existsSync(toRender) ){
    res.sendFile(toRender);
    console.log("Rendering ", req.originalUrl)
  } else {
    res.sendFile(path.join(__dirname, '../', 'build-old', 'index.html'));
  }
});


module.exports = app;
