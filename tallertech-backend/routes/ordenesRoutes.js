const express = require('express');
const router = express.Router();
const OrdenesController = require('../controllers/ordenesController');

router.get('/', OrdenesController.getAll);
router.post('/', OrdenesController.create);

module.exports = router;
