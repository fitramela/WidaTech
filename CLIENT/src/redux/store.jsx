import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './invoiceSlice.jsx';

const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});

export default store;