/* eslint-disable no-underscore-dangle */
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
  async search(req, res) {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async store(req, res) {
    try {
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
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user)
        return res.status(404).json({ message: 'Usuário não encontrado. Verifique os dados!' });

      const autorized = await User.compare(req.body.password, user.password);

      if (autorized) {
        const token = User.token(user._id);
        return res.status(200).json({ email: user.email, token });
      }
      return res.status(401).json({ message: 'Não autorizado!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
