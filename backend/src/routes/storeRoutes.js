const express = require('express');
const {
  insertStore,
  getAllStores,
  getStoreByCode,
  updateStore,
  deleteStore,
} = require('../controllers/storeController');

const router = express.Router();

router.get('/consult/all', getAllStores);
router.get('/consult/:code', getStoreByCode);
router.post('/register', insertStore);
router.put('/edit/:code', updateStore);
router.delete('/delete/:code', deleteStore);

module.exports = router;
