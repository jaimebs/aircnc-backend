const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema(
  {
    thumbmail: { type: String, required: false },
    company: { type: String, required: true },
    price: { type: Number, required: false },
    techs: { type: [String], required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Spot', spotSchema);
