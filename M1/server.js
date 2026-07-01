var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

dotenv.config({
  path: process.env.DOTENV_CONFIG_PATH || path.join(__dirname, 'environments', 'local.env'),
});

mongoose.connect(process.env.MONGO_URI).catch((err) => {
  console.error('MongoDB connection failed:', err.message);
});
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected to MongoDB');
});

con.on('error', (err) => {
    console.log(err);
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

