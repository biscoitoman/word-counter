const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const  {v1Routes}  = require('./api/v1');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 5500;

app.use('/v1', v1Routes);
app.get('/', (req,res) => {res.sendFile(path.join(__dirname, '../html/index.html'))});

app.listen(port, () => {
    console.log(`[App]: server listening at http://localhost:${port}`);
  });

module.exports = {app};