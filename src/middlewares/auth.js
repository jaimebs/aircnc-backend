/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) return res.status(401).send({ autenticado: false, mensagem: 'Nenhum token.' });

  const [, token] = authHeaders.split(' ');

  jwt.verify(token, process.env.SECRET_KEY_TOKEN, (err, decoded) => {
    if (err)
      return res.status(500).send({
        autenticado: false,
        mensagem: 'Falha na autenticação. Verificar o token',
        error: err,
      });
    // Se tudo estiver ok, salva no request para uso posterior
    req.usuarioId = decoded.id;
    next();
  });
};
