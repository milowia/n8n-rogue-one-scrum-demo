import axios from 'axios';

const API_URL = '/api/account';

export const getAccountInfo = async () => {
  const response = await axios.get(`${API_URL}/info`);
  return response.data;
};

export const updateAccountInfo = async (accountInfo) => {
  const response = await axios.put(`${API_URL}/update`, accountInfo);
  return response.data;
};
