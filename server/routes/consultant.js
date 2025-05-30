// server/routes/consultant.js
const express = require('express');
const router = express.Router();
const Consultant = require('../models/Consultant');

// POST - Add new consultant
router.post('/', async (req, res) => {
  try {
    const consultant = new Consultant(req.body);
    await consultant.save();
    res.status(201).json({ message: 'Consultant submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - List all consultants (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const consultants = await Consultant.find();
    res.json(consultants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
