const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/users');
const dealRoutes = require('./routes/deals');

const app = express();
app.use(express.json());

// Routes
app.use('/user', userRoutes);
app.use('/deals', dealRoutes);

// Connect DB & Start Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
})
.catch(err => console.error(err));

