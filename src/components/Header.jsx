import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Pegue e Monte</Link>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map(({ title, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-blue-200 transition-colors">{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;