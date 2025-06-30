const express = require('express');
const router = express.Router();
const { getAccountInfo, updateAccountInfo } = require('../controllers/accountController');

router.get('/info', getAccountInfo);
router.put('/update', updateAccountInfo);

module.exports = router;
