/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.method('compare', async (formPass, userPass) => {
  return bcrypt.compare(formPass, userPass);
});

module.exports = mongoose.model('User', userSchema);
