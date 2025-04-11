"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Courses", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bc446852de19c2c2744565b2e6d360684ffddbe?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2" },
    { name: "Articles", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2743d11b1291f56e46c99c65fe7273049c285017?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2" },
    { name: "Inspirations", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d515a38dae14c18f1be3a581ccc12795ad298d9?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2" },
    { name: "Horoscopes", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09e39280afb77173dcae6977265ce97d1016d0eb?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900">LearnHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>{item.name}</span>
                <img
                  src={item.icon}
                  className="w-5 h-5 object-contain"
                  alt={`${item.name} icon`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/61bcfbb34040b2b874529a69be28e4c0467c61e8?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
                className="w-5 h-5"
                alt="Search"
              />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ab5a46e88bc1db5fbafde9f198191c6b83747?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
                  className="w-5 h-5"
                  alt="User"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">My Courses</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/61bcfbb34040b2b874529a69be28e4c0467c61e8?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
                className="w-5 h-5"
                alt="Search"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center space-x-2 px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
              >
                <span>{item.name}</span>
                <img
                  src={item.icon}
                  className="w-5 h-5 object-contain"
                  alt={`${item.name} icon`}
                />
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 px-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ab5a46e88bc1db5fbafde9f198191c6b83747?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
                    className="w-5 h-5"
                    alt="User"
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">My Courses</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
