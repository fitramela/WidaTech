import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Tokopedia Clone</h1>
      <Link to="/products">
        <button className="bg-white px-4 py-2 rounded">
          See all products
        </button>
      </Link>
    </header>
  );
};

export default Header;

