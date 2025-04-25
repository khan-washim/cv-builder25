const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    profession: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    summary: { type: String },
    education: [
      {
        institution: { type: String, required: true },
        degree: { type: String, required: true },
        field: { type: String, required: true },
        startYear: { type: String, required: true },
        endYear: { type: String, required: true },
      },
    ],
    experience: [
      {
        company: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    skills: { type: [String], default: [] },
    languages: { type: [String], default: [] },
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
    hobbies: { type: String },
    certifications: { type: [String], default: [] },
    achievements: { type: [String], default: [] },
    profileImage: { type: String }, // Store base64 or URL of the uploaded image
    nationality: { type: String },
    dob: { type: Date },
    maritalStatus: { type: String },
  },
  { timestamps: true }
);

const CV = mongoose.model('CV', cvSchema);

module.exports = CV;
