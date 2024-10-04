import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import InvoiceForm from '../components/invoiceForm';
import InvoiceCard from '../components/invoiceCard';
import RevenueGraph from '../components/revenueGraph';
import { addInvoice } from '../redux/invoiceSlice';

const App = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  const handleAddInvoice = (invoice) => {
    dispatch(addInvoice(invoice));
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className=" text-green-600 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Create Invoice</h1>
        </header>
        <main className="container mx-auto p-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 bg-white p-4 rounded-lg shadow">
              <InvoiceForm onAddInvoice={handleAddInvoice} />
            </div>
            <div className="col-span-2 bg-white p-4 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {invoices.map((invoice, index) => (
                  <div key={index}>
                    <InvoiceCard invoice={invoice} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <RevenueGraph data={invoices} />
        </main>
      </div>
    </Provider>
  );
};

export default App;

