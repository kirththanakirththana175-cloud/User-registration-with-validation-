const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('🚀 Server running on port 5000'));