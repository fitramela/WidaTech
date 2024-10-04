// src/components/InvoiceCard.jsx
import React from 'react';

const InvoiceCard = ({ invoice }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow">
      <h3>{invoice.customerName}</h3>
      <p>Date: {invoice.date}</p>
      <p>Salesperson: {invoice.salespersonName}</p>
      <p>Total Products: {invoice.products.length}</p>
      <p>Notes: {invoice.notes}</p>
    </div>
  );
};

export default InvoiceCard;

