const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('😀 MongoDB is connected ');
});

connection.on('error', (error) => {
  console.log('👎 Connection error, check MongoDB connection...', error);
});

module.exports = mongoose;
