import React, { useState, useEffect } from 'react';
import { updateAccountInfo, getAccountInfo } from '../services/accountService';

const AccountSettings = () => {
  const [accountInfo, setAccountInfo] = useState({});
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchAccountInfo = async () => {
      const data = await getAccountInfo();
      setAccountInfo(data);
    };
    fetchAccountInfo();
  }, []);

  const handleChange = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(accountInfo.email)) {
      setError('Invalid email format');
      return;
    }
    setError('');
    const response = await updateAccountInfo(accountInfo);
    if (response.success) {
      setSuccessMessage('Account information updated successfully.');
    } else {
      setError('Failed to update account information.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='email' value={accountInfo.email || ''} onChange={handleChange} placeholder='Email' />
        <input type='text' name='deliveryPreference' value={accountInfo.deliveryPreference || ''} onChange={handleChange} placeholder='Delivery Preference' />
        <button type='submit'>Save Changes</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default AccountSettings;
