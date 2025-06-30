import { notifyMerchant } from '../services/api';

export const markDeliveryCompleted = async (req, res) => {
  const { deliveryId } = req.params;
  // Logic to mark delivery as completed in the database
  // Notify merchant about the delivery status
  await notifyMerchant(merchantId, 'Delivered');
  res.status(200).send({ message: 'Delivery marked as completed.' });
};
