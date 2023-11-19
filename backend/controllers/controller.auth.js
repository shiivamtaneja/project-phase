const { constants } = require('../constants');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

require('dotenv').config();

/**
 * @desc Register New Users
 * @route POST /api/auth/register
 * @access public
 */
const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        email
      }
    });

    if (existingAdmin) {
      return res.status(constants.EXISTS).json({ error: "Email Already Exsists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.admin.create({
      data: {
        email,
        hashed_password: hashedPassword
      }
    });

    if (user) {
      return res.status(constants.CREATED).json({ data: "User Created Sucessfully." });
    }

  } catch (err) {
    console.error('Error creating user:', err);
    return res.status(constants.SERVER_ERROR).json({ error: "Internal Server Error occured!" });
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * @desc Login user
 * @route POST /api/auth/login
 * @access public
 */
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {

    const user = await prisma.admin.findUnique({
      where: {
        email
      }
    });

    if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
      return res.status(constants.UNAUTHORIZED).json({ error: "Invalid email or password." });
    };

    const token = jwt.sign({ user_id: user.id }, process.env.JWT_TOKEN, {
      expiresIn: '1d'
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(constants.SUCCESS).json({ data: "Login Sucessfully." });

  } catch (err) {
    console.error('Error login user:', err);
    return res.status(constants.SERVER_ERROR).json({ error: "Internal Server Error occured!" });
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * @desc Logout Users
 * @route GET /api/auth/logout
 * @access public
 */
const logoutUser = (req, res) => {
  try {
    res.clearCookie('jwt');

    return res.status(constants.SUCCESS).json({ data: "Logout Sucessfully." });
  } catch (err) {
    console.error('Error during logout:', err);
    return res.status(constants.SERVER_ERROR).json({ error: "Internal Server Error occured!" });
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser
}