const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    approved: { type: Boolean },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Spot',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', bookingSchema);
