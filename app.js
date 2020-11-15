const express = require('express');
const app = express();

const musicRoutes = require('./api/routes/music');
const usersRoutes = require('./api/routes/users');

app.use('/music', musicRoutes);
app.use('/users', usersRoutes);

module.exports = app;