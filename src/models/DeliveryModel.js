const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  address: { type: String, required: true },
  items: { type: Array, required: true },
  notes: { type: String, default: '' }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
