const express = require('express');

const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and authentication headers to be sent
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));