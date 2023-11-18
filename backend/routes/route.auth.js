const router = require('express').Router();

const { body } = require('express-validator');
const inputValidator = require('../middleware/inputValidator');

const { createUser, loginUser } = require('../controllers/controller.auth');

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  inputValidator,
  loginUser);

router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  inputValidator,
  createUser);

module.exports = router;