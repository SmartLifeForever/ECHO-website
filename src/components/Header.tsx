import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

function Header() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = React.useState(false);

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
        
        {user ? (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-semibold"
            >
              {user.username[0].toUpperCase()}
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2">
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 w-full"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="text-gray-200 hover:text-white transition-colors text-lg"
          >
            CONNEXION
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;