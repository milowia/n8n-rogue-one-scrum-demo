import axios from 'axios';

const DeliveryService = {
  getDeliveries: async () => {
    const response = await axios.get('/api/deliveries');
    return response.data;
  },
  exportDeliveries: async () => {
    const response = await axios.get('/api/deliveries/export');
    return response.data;
  }
};

export default DeliveryService;
