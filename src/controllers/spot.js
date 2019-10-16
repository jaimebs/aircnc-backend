const Spot = require('../models/spot');
const User = require('../models/user');

module.exports = {
  async index(req, res) {
    try {
      const { tech } = req.query;

      const spot = await Spot.find({ techs: tech });
      return res.status(200).json(spot);
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
      const { filename } = req.file;
      const { company, techs, price } = req.body;
      const { user_id } = req.headers;

      const user = await User.findById(user_id);

      if (!user) return res.status(404).json({ error: 'Usuário não existe.' });

      const spot = await Spot.create({
        user: user_id,
        thumbmail: filename,
        company,
        techs: techs.split(',').map(tech => tech.trim()),
        price,
      });
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
