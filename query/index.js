const express = require('express');
const bodyParser = require('body-parser');
const { randomByte } = require('crypto');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.listen(4002, () => {
  console.log('Listening on 4002');
});