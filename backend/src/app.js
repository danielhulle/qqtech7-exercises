const express = require('express');
const storeRoutes = require('./routes/storeRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const talonRoutes = require('./routes/talonRoutes');

const app = express();

app.use(express.json());
app.use('/api/store', storeRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user', userRoutes);
app.use('/api/talon', talonRoutes);

module.exports = app;
