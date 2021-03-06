// Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Configure environment variables
require('dotenv').config();
// Express server
const app = express();
// Host server on localhost 5000
const port = process.env.PORT || 5000;
// Middleware: cors, bodyparser
app.use(cors());
app.use(express.json());

// Get MongoDB URI string from .env file
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
// Connect to MongoDB and console log if success
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Import models
const exercsisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// Append routes
app.use('/exercises', exercsisesRouter);
app.use('/users', usersRouter);

// Start server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
