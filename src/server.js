const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(require('./router'));

app.listen(3333);
