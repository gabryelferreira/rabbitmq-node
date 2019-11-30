const express = require('express');
const DeliveryController = require('./controllers/DeliveryController');

const router = express.Router();

router.post("/", DeliveryController.index);

module.exports = router;