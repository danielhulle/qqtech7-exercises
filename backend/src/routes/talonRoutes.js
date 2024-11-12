const express = require('express');
const { getAllTalons, getTalonById, insertTalon, updateTalon, deleteTalon } = require('../controllers/talonController');

const router = express.Router();

router.get('/consult/all', getAllTalons);
router.get('/consult/:id', getTalonById);
router.post('/register/', insertTalon);
router.put('/edit/:id', updateTalon);
router.delete('/delete/:id', deleteTalon);

module.exports = router;
