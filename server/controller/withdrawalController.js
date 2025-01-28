
// withdrawalController.js
const { v4: uuidv4 } = require('uuid');

// Shared withdrawal requests array
let withdrawalRequests = [];

const createWithdrawalRequest = (req, res) => {
  const { accountName, accountNumber, accountType, amount } = req.body;

  // Log incoming request for debugging
  console.log('Received withdrawal request:', req.body);

  // Validation
  if (!accountName || !accountNumber || !accountType || !amount) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (amount <= 0) {
    return res.status(400).json({ message: 'Amount should be greater than 0' });
  }

  // Create a new withdrawal request
  const newRequest = {
    id: uuidv4(),
    accountName,
    accountNumber,
    accountType,
    amount,
    status: 'Pending',
    date: new Date(),
  };

  withdrawalRequests.push(newRequest); // Save request

  console.log('New withdrawal request added:', newRequest); // Log added request

  res.status(200).json({ message: 'Withdrawal request submitted successfully' });
};

const getWithdrawalHistory = (req, res) => {
  res.status(200).json(withdrawalRequests);
};

module.exports = {
  createWithdrawalRequest,
  getWithdrawalHistory,
  withdrawalRequests, // Export withdrawalRequests for sharing across controllers
};







