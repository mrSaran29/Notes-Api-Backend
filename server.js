const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const CrudRouter = require('./Router/router');
const dotenv = require('dotenv');
const morgan = require('morgan')


dotenv.config();



mongoose.set('strictQuery', false);


mongoose.connect(process.env.DB_STRING, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch(err => console.log("❌ Database Connection Error:", err.message));
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use('/home', CrudRouter);

// PORT from .env or default
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
