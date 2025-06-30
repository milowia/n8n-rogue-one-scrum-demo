import React, { useEffect, useState } from 'react';
import JobService from '../services/JobService';

const JobSelectionPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [timeRange, setTimeRange] = useState({ start: '', end: '' });

  useEffect(() => {
    const fetchJobs = async () => {
      const availableJobs = await JobService.getAvailableJobs();
      setJobs(availableJobs);
      setFilteredJobs(availableJobs);
    };
    fetchJobs();
  }, []);

  const filterJobsByTime = () => {
    const filtered = jobs.filter(job => job.time >= timeRange.start && job.time <= timeRange.end);
    setFilteredJobs(filtered);
  };

  const acceptJob = async (jobId) => {
    await JobService.acceptJob(jobId);
    setFilteredJobs(filteredJobs.filter(job => job.id !== jobId));
  };

  const declineJob = async (jobId) => {
    await JobService.declineJob(jobId);
    setFilteredJobs(filteredJobs.filter(job => job.id !== jobId));
  };

  return (
    <div>
      <h1>Available Delivery Jobs</h1>
      <input type='time' onChange={(e) => setTimeRange({ ...timeRange, start: e.target.value })} />
      <input type='time' onChange={(e) => setTimeRange({ ...timeRange, end: e.target.value })} />
      <button onClick={filterJobsByTime}>Filter</button>
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.details}</p>
            <button onClick={() => acceptJob(job.id)}>Accept Job</button>
            <button onClick={() => declineJob(job.id)}>Decline Job</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSelectionPage;
