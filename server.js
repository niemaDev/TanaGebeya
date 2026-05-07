require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); // IMPORTANT

const app = express();

app.use(cors());
app.use(express.json());

// ✅ THIS IS CRITICAL
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tanagebeya")
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));