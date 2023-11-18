const express = require('express');

const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and authentication headers to be sent
};


const prisma = new PrismaClient();

require('dotenv').config();

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/getdata', async (req, res) => {
  try {

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

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));