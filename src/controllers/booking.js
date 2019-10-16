const Booking = require('../models/booking');

module.exports = {
  async store(req, res) {
    try {
      const { user_id } = req.headers;
      const { spot_id } = req.params;
      const { date } = req.body;

      const booking = await Booking.create({ user: user_id, spot: spot_id, date });
      return res.status(201).json(booking);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
