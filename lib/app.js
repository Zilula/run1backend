const express = require('express');
const app = express();
// const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');
const cors = require('./middleware/cors');

app.use(express.json());
app.use(cors);
app.use('/random', require('./route/random'));

app.use(handler);

module.exports = app;

