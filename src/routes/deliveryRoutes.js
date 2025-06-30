const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/DeliveryController');

router.get('/', DeliveryController.getDeliveries);
router.get('/export', DeliveryController.exportDeliveries);

module.exports = router;
