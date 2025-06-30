import axios from 'axios';

const API_URL = 'https://api.example.com/jobs';

const getAvailableJobs = async () => {
  const response = await axios.get(`${API_URL}/available`);
  return response.data;
};

const acceptJob = async (jobId) => {
  await axios.post(`${API_URL}/accept`, { jobId });
};

const declineJob = async (jobId) => {
  await axios.post(`${API_URL}/decline`, { jobId });
};

export default { getAvailableJobs, acceptJob, declineJob };