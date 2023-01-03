const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5070;

console.log('⚡ Your DB connection details: ', process.env.MONGO_URL);

app.listen(port, () => console.log(`Listening on port ${port}`));
