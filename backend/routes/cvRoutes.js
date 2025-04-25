const express = require('express');
const router = express.Router();
const CV = require('../models/CV');

// Create a new CV
router.post('/create', async (req, res) => {
  try {
    const newCV = new CV(req.body);
    await newCV.save();
    res.status(201).json({ message: 'CV saved successfully!', cv: newCV });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving CV' });
  }
});

// Get a CV by email
router.get('/cv/:email', async (req, res) => {
  try {
    const cv = await CV.findOne({ email: req.params.email });
    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }
    res.status(200).json(cv);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching CV' });
  }
});

// Get all CVs (for testing or admin purposes)
router.get('/all-cvs', async (req, res) => {
  try {
    const cvs = await CV.find();
    res.status(200).json(cvs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching CVs' });
  }
});

module.exports = router;
