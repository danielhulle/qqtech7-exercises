const express = require('express');
const storeRoutes = require('./routes/storeRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.use(express.json());
app.use('/api/store', storeRoutes);
app.use('/api/inventory', inventoryRoutes);

module.exports = app;
