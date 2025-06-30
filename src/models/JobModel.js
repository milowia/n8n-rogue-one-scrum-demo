const db = require('../config/db');

const findAvailableJobs = async (location) => {
  return await db.query('SELECT * FROM jobs WHERE location = ?', [location]);
};

const acceptJob = async (jobId, courierId) => {
  await db.query('UPDATE jobs SET status = ? WHERE id = ? AND courier_id IS NULL', ['accepted', jobId]);
};

const declineJob = async (jobId, courierId) => {
  await db.query('DELETE FROM jobs WHERE id = ? AND courier_id = ?', [jobId, courierId]);
};

module.exports = { findAvailableJobs, acceptJob, declineJob };