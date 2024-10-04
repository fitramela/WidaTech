// src/components/InvoiceForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const InvoiceForm = ({ onAddInvoice }) => {
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [salespersonName, setSalespersonName] = useState('');
  const [notes, setNotes] = useState('');
  const [products, setProducts] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Hardcoded product data
  const productData = [
    { name: 'Bluetooth speaker', price: 252000, stock: 20 },
    { name: 'Headphone', price: 60000, stock: 50 },
    { name: 'Laptop charger', price: 960000, stock: 30 },
    { name: 'LCD Monitor', price: 600000, stock: 10 },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setCustomerName(value);
    if (value) {
      const suggestions = productData.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setAutocomplete(suggestions);
    } else {
      setAutocomplete([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setAutocomplete([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoice = {
      date: format(new Date(date), 'yyyy-MM-dd'),
      customerName,
      salespersonName,
      notes,
      products: selectedProducts,
    };
    onAddInvoice(invoice);
    // Reset form
    setDate('');
    setCustomerName('');
    setSalespersonName('');
    setNotes('');
    setSelectedProducts([]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <th className="px-4 py-2">Date</th>
            <td className="px-4 py-2">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="border p-2"
              />
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2">Customer Name</th>
            <td className="px-4 py-2">
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={handleSearch}
                required
                className="border p-2"
              />
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2">Salesperson Name</th>
            <td className="px-4 py-2">
              <input
                type="text"
                placeholder="Salesperson Name"
                value={salespersonName}
                onChange={(e) => setSalespersonName(e.target.value)}
                required
                className="border p-2"
              />
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2">Notes</th>
            <td className="px-4 py-2">
              <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border p-2"
              />
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2">Products</th>
            <td className="px-4 py-2">
              <input
                type="text"
                placeholder="Search Products"
                onChange={handleSearch}
                className="border p-2"
              />
              <ul className="border p-2">
                {autocomplete.map((product, index) => (
                  <li key={index} onClick={() => handleSelectProduct(product)}>
                    {product.name} - {product.price} IDR
                  </li>
                ))}
              </ul>
              <ul>
                {selectedProducts.map((product, index) => (
                  <li key={index}>{product.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Invoice</button>
    </form>
  );
};

export default InvoiceForm;

