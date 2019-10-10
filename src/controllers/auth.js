/* eslint-disable no-underscore-dangle */
const User = require('../models/user');

module.exports = {
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
