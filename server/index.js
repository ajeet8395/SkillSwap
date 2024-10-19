const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./src/db/connectDB');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());    

app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
