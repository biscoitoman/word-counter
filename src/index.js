const bodyParser = require('body-parser');
const express = require('express');
const  {v1Routes}  = require('./api/v1');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 5500;

app.use('/v1', v1Routes);

app.listen(port, () => {
    console.log(`[App]: server listening at http://localhost:${port}`);
  });

module.exports = {app};