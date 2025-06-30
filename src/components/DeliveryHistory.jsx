import React, { useState, useEffect } from 'react';
import DeliveryService from '../services/DeliveryService';
import DeliveryDetail from './DeliveryDetail';

const DeliveryHistory = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = async () => {
    const data = await DeliveryService.getDeliveries();
    setDeliveries(data);
  };

  const handleFilterChange = (event) => {
    setFilterDate(event.target.value);
  };

  const filteredDeliveries = deliveries.filter(delivery => {
    return delivery.date.includes(filterDate);
  });

  return (
    <div>
      <h1>Delivery History</h1>
      <input type='date' onChange={handleFilterChange} />
      <ul>
        {filteredDeliveries.map(delivery => (
          <li key={delivery.id} onClick={() => setSelectedDelivery(delivery)}>
            {delivery.date} - {delivery.status} - {delivery.deliveryTime}
          </li>
        ))}
      </ul>
      {selectedDelivery && <DeliveryDetail delivery={selectedDelivery} />}
    </div>
  );
};

export default DeliveryHistory;
