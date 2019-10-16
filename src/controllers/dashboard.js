const Spot = require('../models/spot');

module.exports = {
  async show(req, res) {
    try {
      const { user_id } = req.headers;

      const spots = await Spot.find({ user: user_id });
      return res.status(200).json(spots);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
