require('dotenv').config();
const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const connection = require('./database');

const app = express();

connection();

app.use(cors());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(require('./routes'));

app.listen(process.env.PORT);
