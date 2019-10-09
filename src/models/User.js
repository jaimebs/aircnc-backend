/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 10);

  next();
});

userSchema.statics.compare = async (formPass, userPass) => bcrypt.compare(formPass, userPass);

userSchema.statics.token = user_id =>
  jwt.sign({ id: user_id }, process.env.SECRET_KEY_TOKEN, {
    // expiresIn: 100 // expira em...
  });

module.exports = mongoose.model('User', userSchema);
