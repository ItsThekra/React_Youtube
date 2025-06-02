import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md sticky">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt="YouTube Logo"
          className="h-6"
        />
        <span className="text-xl font-bold text-red-600">YouTube</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 outline-none"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-r-full hover:bg-gray-300">
          🔍
        </button>
      </div>

      {/* Right: Profile Icon */}
      <div>
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
