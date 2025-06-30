import axios from 'axios';

const API_URL = process.env.API_URL;

export const updateCourierLocation = async (courierId, location) => {
  try {
    await axios.post(`${API_URL}/couriers/${courierId}/location`, location);
  } catch (error) {
    console.error('Error updating location:', error);
  }
};

export const markDeliveryCompleted = async (deliveryId) => {
  try {
    await axios.post(`${API_URL}/deliveries/${deliveryId}/complete`);
  } catch (error) {
    console.error('Error marking delivery as completed:', error);
  }
};

export const notifyMerchant = async (merchantId, status) => {
  try {
    await axios.post(`${API_URL}/merchants/${merchantId}/status`, { status });
  } catch (error) {
    console.error('Error notifying merchant:', error);
  }
};
