const { validationResult } = require('express-validator');

const { constants } = require('../constants');

const inputValidator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const missingFields = [];

    errors.array().forEach((err) => {
      if (!missingFields.includes(err.path)) {
        missingFields.push(err.path)
      }
    });

    return res.status(constants.VALIDATION_ERROR).send({ error: 'Validation Error', missingFields });
  }

  next();
};

module.exports = inputValidator;