const Spot = require('../models/spot');

module.exports = {
  async index(req, res) {
    try {
      const users = await Spot.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async search(req, res) {
    try {
      const spot = await Spot.findById(req.params.id);
      return res.status(200).json(spot);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async store(req, res) {
    try {
      const spot = await Spot.create(req.body);
      return res.status(201).json(spot);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const spot = await Spot.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
      return res.status(200).json(spot);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async remove(req, res) {
    try {
      await Spot.findByIdAndRemove({ _id: req.params.id });
      return res.status(200).json({ message: 'Deletado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
