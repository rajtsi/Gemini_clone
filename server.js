const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRouter = require('./routes/authRoutes.js');
const errorHandler = require('./middleware/errormiddleware.js'); // Correct import
const reqRouter= require('./routes/reqRoutes.js');
const cookieParser = require("cookie-parser");
// dotenv configuration
dotenv.config();

// Connecting to the database
connectDB();

// Create app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Auth Router

app.use('/api/v1/auth', authRouter);


app.use('/api/v1/request',reqRouter);


// Error Middleware (At the End)
app.use(errorHandler);

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
