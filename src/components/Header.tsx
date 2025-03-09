import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Leaf, ChevronDown } from 'lucide-react';

interface SubMenu {
  title: string;
  path: string;
}

interface MenuItem {
  title: string;
  path: string;
  subMenu?: SubMenu[];
  sections?: { title: string; id: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "SERIE",
    path: "/series",
    sections: [
      { title: "Episodes", id: "episodes" },
      { title: "À propos", id: "about" }
    ]
  },
  {
    title: "MOUVEMENT",
    path: "/movement",
    sections: [
      { title: "Notre Histoire", id: "history" },
      { title: "Notre Mission", id: "mission" },
      { title: "Nos Partenaires", id: "partners" }
    ]
  },
  {
    title: "ECHO LINK",
    path: "/echolink-home",
    sections: [
      { title: "Présentation", id: "presentation" },
      { title: "Fonctionnalités", id: "features" },
      { title: "Partenaires", id: "partners" }
    ]
  }
];

const logoSections = [
  { title: "Présentation", id: "presentation" },
  { title: "Actualités", id: "news" },
  { title: "Nos Solutions", id: "solutions" }
];

function Header() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (path: string) => {
    setActiveMenu(path);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-accent/20 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('logo')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/" className="flex items-center">
              <Leaf className={`w-6 h-6 ${isActive('/') ? 'text-primary' : 'text-light'} mr-2`} />
              <span className={`${isActive('/') ? 'text-primary' : 'text-light'} font-semibold flex items-center`}>
                ECHO
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  activeMenu === 'logo' ? 'rotate-180' : ''
                }`} />
              </span>
            </Link>

            {activeMenu === 'logo' && (
              <div className="absolute top-full left-0 w-64 bg-dark/95 rounded-lg shadow-xl py-2 border border-accent/20 dropdown-menu active">
                {logoSections.map((section) => (
                  <Link
                    key={section.id}
                    to={`/#${section.id}`}
                    className="block px-4 py-2 text-light hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (location.pathname !== '/') {
                        window.location.href = `/#${section.id}`;
                      } else {
                        scrollToSection(section.id);
                      }
                    }}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 flex justify-center space-x-12">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.path)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`text-lg flex items-center ${
                    isActive(item.path) ? 'text-primary' : 'text-light hover:text-primary'
                  } transition-colors`}
                >
                  {item.title}
                  {item.sections && (
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeMenu === item.path ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {item.sections && activeMenu === item.path && (
                  <div className="absolute top-full left-0 w-64 bg-dark/95 rounded-lg shadow-xl py-2 border border-accent/20 dropdown-menu active">
                    {item.sections.map((section) => (
                      <Link
                        key={section.id}
                        to={`${item.path}#${section.id}`}
                        className="block px-4 py-2 text-light hover:bg-primary/10 hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          if (location.pathname !== item.path) {
                            window.location.href = `${item.path}#${section.id}`;
                          } else {
                            scrollToSection(section.id);
                          }
                        }}
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark text-lg font-semibold"
              >
                {user.username[0].toUpperCase()}
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-dark/95 rounded-lg shadow-xl py-2 border border-accent/20">
                  <button
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="flex items-center px-4 py-2 text-light hover:bg-background w-full"
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
              className="text-light hover:text-primary transition-colors text-lg flex items-center"
            >
              CONNEXION
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;