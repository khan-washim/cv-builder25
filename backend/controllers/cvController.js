// cvController.js
const CV = require('../models/CV');

exports.createCV = async (req, res) => {
  try {
    console.log("Received form data:", req.body); // Debugging line
    const newCV = new CV({
      ...req.body,
      user: req.user.id // Attach user from auth middleware
    });
    const savedCV = await newCV.save();
    res.status(201).json({
      message: "CV saved successfully!",
      cv: savedCV
    });
  } catch (error) {
    console.error("Error creating CV:", error); // Detailed error logging
    res.status(500).json({ error: error.message });
  }
};


exports.getUserCVs = async (req, res) => {
  try {
    const cvs = await CV.find({ user: req.user.id });
    res.json(cvs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSingleCV = async (req, res) => {
  try {
    const cv = await CV.findOne({ _id: req.params.id, user: req.user.id });
    if (!cv) return res.status(404).json({ message: 'CV not found' });
    res.json(cv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCV = async (req, res) => {
  try {
    const updatedCV = await CV.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedCV) return res.status(404).json({ message: 'CV not found or unauthorized' });
    res.json(updatedCV);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCV = async (req, res) => {
  try {
    const deleted = await CV.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'CV not found or unauthorized' });
    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
