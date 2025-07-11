const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');
const User = require('../models/User');

// POST /deals - Add Deal
router.post('/', async (req, res) => {
  try {
    const deal = new Deal(req.body);
    await deal.save();
    res.status(201).json(deal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /deals - Get All Deals
router.get('/', async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /claim/:userId/:dealId
router.post('/claim/:userId/:dealId', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.userId });
    const deal = await Deal.findOne({ id: req.params.dealId });

    if (!user || !deal) {
      return res.status(404).json({ error: 'User or Deal not found' });
    }

    if (user.walletBalance < deal.price) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    user.walletBalance -= deal.price;
    await user.save();

    res.json({
      message: 'Deal claimed successfully',
      updatedBalance: user.walletBalance
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
