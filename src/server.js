const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(require('./router'));

app.listen(3333);
