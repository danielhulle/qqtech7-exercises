const express = require('express');
const {
  getAllProfiles,
  getProfileById,
  insertProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');

const router = express.Router();

router.get('/consult/all', getAllProfiles);
router.get('/consult/:id', getProfileById);
router.post('/register', insertProfile);
router.put('/edit/:id', updateProfile);
router.delete('/delete/:id', deleteProfile);

module.exports = router;
