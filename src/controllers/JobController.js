const JobModel = require('../models/JobModel');

const getAvailableJobs = async (req, res) => {
  const jobs = await JobModel.findAvailableJobs(req.user.location);
  res.json(jobs);
};

const acceptJob = async (req, res) => {
  await JobModel.acceptJob(req.body.jobId, req.user.id);
  res.sendStatus(200);
};

const declineJob = async (req, res) => {
  await JobModel.declineJob(req.body.jobId, req.user.id);
  res.sendStatus(200);
};

module.exports = { getAvailableJobs, acceptJob, declineJob };