const express = require('express');
const {
  getAllInventories,
  getInventoryById,
  insertInventory,
  updateInventory,
  deleteInventory,
} = require('../controllers/inventoryController');

const router = express.Router();

router.get('/consult/all', getAllInventories);
router.get('/consult/:id', getInventoryById);
router.post('/register', insertInventory);
router.put('/edit/:id', updateInventory);
router.delete('/delete/:id', deleteInventory);

module.exports = router;
