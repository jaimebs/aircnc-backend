require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./database');

const app = express();

connection();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT);
