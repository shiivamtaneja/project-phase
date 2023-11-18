const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const { authenticateToken } = require('./middleware/authenticateToken');

const prisma = new PrismaClient();

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and authentication headers to be sent
}));

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/route.auth'));

app.get('/getdata', async (req, res) => {
  try {
    console.log(req.cookies);
    console.log('req.cookies.test');
    const user = await prisma.user.findMany();

    if (!user) {
      return res.send({
        statusCode: 200,
        message: { msg: "User Not found" }
      });
    }

    res.send({
      statusCode: 200,
      user
    });

  } catch (err) {
    console.error('Error fetching user data:', err);
  } finally {
    await prisma.$disconnect();
  }
});

app.get('/check-session', authenticateToken, (req, res) => {
  res.status(200).json({ data: 'User has a valid session' });
});

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));