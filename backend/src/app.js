const express = require('express');
const storeRoutes = require('./routes/storeRoutes');

const app = express();

app.use(express.json());
app.use('/api/store', storeRoutes);

module.exports = app;
