const mongoose = require('mongoose');

const connection = () =>
  mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

module.exports = connection;
