// Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Configure environment variables
require('dotenv').config();
// Express server
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}); //useUnifiedTopology: true
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Require models
const exercsisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// Use
app.use('/exercises', exercsisesRouter);
app.use('/users', usersRouter);

// Start server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});