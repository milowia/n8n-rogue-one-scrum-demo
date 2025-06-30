import React from 'react';

const Notification = ({ deliveryId, status, timestamp }) => {
  return (
    <div className='notification'>
      <h4>Delivery Status Update</h4>
      <p>Delivery ID: {deliveryId}</p>
      <p>Status: {status}</p>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
};

export default Notification;
