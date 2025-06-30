const Account = require('../models/Account');

exports.getAccountInfo = async (req, res) => {
  try {
    const account = await Account.findById(req.user.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving account information.' });
  }
};

exports.updateAccountInfo = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json({ success: true, account });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating account information.' });
  }
};
