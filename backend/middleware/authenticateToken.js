const jwt = require('jsonwebtoken');

const { constants } = require('../constants');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(constants.UNAUTHORIZED).send({ error: "Session Expired, Kindly Login Again!" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {

    if (err) {
      return res.status(constants.UNAUTHORIZED).send({ error: "Session Expired, Kindly Login Again!" });
    }

    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken
};