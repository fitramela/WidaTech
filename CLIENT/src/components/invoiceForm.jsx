// src/components/InvoiceForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceForm = ({ onAddInvoice }) => {
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [salespersonName, setSalespersonName] = useState('');
  const [notes, setNotes] = useState('');
  const [products, setProducts] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3000/invoices');
      const productData = response.data.map(product => ({
        name: product.customer,
        price: product.totalPrice,
        stock: 1,
      }));
      setProducts(productData);
    };
    fetchProducts();
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setCustomerName(value);
    if (value) {
      try {
        const response = await axios.get(
          `http://localhost:3000/invoices?customer_like=${value}`
        );
        const suggestions = response.data.map(product => ({
          name: product.customer,
          price: product.totalPrice,
          stock: 1,
        }));
        setAutocomplete(suggestions);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    } else {
      setAutocomplete([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setAutocomplete([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invoice = {
      invoiceNumber: '',
      date: format(new Date(date), 'yyyy-MM-dd'),
      customer: customerName,
      salesperson: salespersonName,
      paymentType: 'Cash',
      notes,
      products: selectedProducts,
    };
    try {
      const response = await axios.post('http://localhost:3000/invoices', invoice);
      onAddInvoice(response.data);
      // Reset form
      setDate('');
      setCustomerName('');
      setSalespersonName('');
      setNotes('');
      setSelectedProducts([]);
    } catch (error) {
      console.error('Error adding invoice:', error);
    }
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

