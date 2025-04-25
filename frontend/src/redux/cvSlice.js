import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cvData: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    nationality: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    education: '',
    university: '',
    experience: '',
    skills: '',
    languages: '',
    certifications: '',
    linkedIn: '',
    github: '',
    profileImage: '', // Add profileImage to the initial state
  },
};

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setCVData: (state, action) => {
      state.cvData = action.payload; // Update cvData with the payload (includes profileImage)
    },
    setProfileImage: (state, action) => {
      state.cvData.profileImage = action.payload; // Update the profile image
    },
  },
});

// Export the actions for use in components
export const { setCVData, setProfileImage } = cvSlice.actions;

// Export the reducer to be used in the store
export default cvSlice.reducer;
