import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-12 text-lg">
          <Link to="/series" className="text-gray-200 hover:text-white transition-colors">
            SERIE
          </Link>
          <Link to="/movement" className="text-gray-200 hover:text-white transition-colors">
            MOUVEMENT
          </Link>
          <Link to="/echolink-home" className="text-gray-200 hover:text-white transition-colors">
            ECHO LINK
          </Link>
          <Link to="/forum" className="text-gray-200 hover:text-white transition-colors">
            FORUM
          </Link>
        </div>
        <Link
          to="/login"
          className="text-gray-200 hover:text-white transition-colors text-lg"
        >
          CONNEXION
        </Link>
      </nav>
    </header>
  );
}

export default Header;