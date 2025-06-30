const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobController');

router.get('/available', JobController.getAvailableJobs);
router.post('/accept', JobController.acceptJob);
router.post('/decline', JobController.declineJob);

module.exports = router;
