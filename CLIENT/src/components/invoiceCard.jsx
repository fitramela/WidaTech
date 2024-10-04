
import React from 'react';

const InvoiceCard = ({ invoice }) => {
  console.log(invoice, '<--- invoice di card');
  return (
    <div className="border rounded-lg p-4 m-2 shadow">
      <h3>{invoice.customerName}</h3>
      <p>Date: {invoice.date}</p>
      <p>Salesperson: {invoice.salespersonName}</p>
      <p>Total Products: {invoice.products.length}</p>
      <p>Notes: {invoice.notes}</p>
      {invoice.products.length > 1 ? (
        <div>
          {invoice.products.map((product, index) => (
            <p key={index}>{index + 1}: {product.name}</p>
          ))}
        </div>
      ) : (
        <p>Products: {invoice.products.length > 0 ? invoice.products[0].name : 'None'}</p>
      )}
    </div>
  );
};

export default InvoiceCard;

