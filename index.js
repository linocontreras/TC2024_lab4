'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/hello/:name', (req, res) => {
  res.send('Hello ' + req.params.name);
});


app.use('/', router);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
