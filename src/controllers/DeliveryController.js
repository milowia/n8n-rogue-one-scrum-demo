const DeliveryModel = require('../models/DeliveryModel');

const DeliveryController = {
  getDeliveries: async (req, res) => {
    const deliveries = await DeliveryModel.find();
    res.json(deliveries);
  },
  exportDeliveries: async (req, res) => {
    const deliveries = await DeliveryModel.find();
    // Logic to convert deliveries to CSV
    res.setHeader('Content-Type', 'text/csv');
    res.send(csvData);
  }
};

module.exports = DeliveryController;
