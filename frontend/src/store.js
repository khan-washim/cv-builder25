// src/store.js

import { createStore, combineReducers } from 'redux';

// Example reducer for CV data
const initialState = {
  cvData: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    // Add other fields you need
  },
};

// Reducer to handle CV data
const cvReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CV_DATA':
      return {
        ...state,
        cvData: action.payload,
      };
    default:
      return state;
  }
};

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({
  cv: cvReducer, // Add more reducers if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
