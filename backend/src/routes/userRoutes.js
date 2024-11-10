const express = require('express');
const {
  getAllUsers,
  getUserByRegistration,
  insertUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/consult/all', getAllUsers);
router.get('/consult/:registration', getUserByRegistration);
router.post('/register', insertUser);
router.put('/edit/:registration', updateUser);
router.delete('/delete/:registration', deleteUser);

module.exports = router;
