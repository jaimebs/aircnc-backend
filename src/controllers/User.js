const User = require('../models/user');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async show(req, res) {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async store(req, res) {
    try {
      const user_already_exists = await User.findOne({ email: req.body.email.trim() });
      if (user_already_exists) res.status(400).json({ message: 'Usuário ja cadastrado!' });
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async remove(req, res) {
    try {
      await User.findByIdAndRemove({ _id: req.params.id });
      return res.status(200).json({ message: 'Deletado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
