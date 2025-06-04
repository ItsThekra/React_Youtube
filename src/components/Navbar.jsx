import React from 'react';
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert('Search submitted!');
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <nav className="bg-[#0f0f0f] text-white px-6 py-3 flex justify-between items-center shadow-md">

      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://pngimg.com/d/youtube_PNG102350.png"
          alt="YouTube"
          className="h-6 cursor-pointer"
          onClick={goHome}
        />
      </div>

      {/* Center - Search bar and Home */}
      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#121212] text-white placeholder-gray-400 border border-[#303030] rounded-l px-4 py-1 w-64 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-[#FF0000] hover:bg-red-700 px-4 rounded-r text-white font-semibold"
          >
            Search
          </button>
        </form>

        <button
          onClick={goHome}
          className="text-gray-300 hover:text-[#FF0000] font-medium transition"
        >
          Home
        </button>
      </div>

      {/* Right - Logout */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-[#FF0000] hover:bg-red-700 px-4 py-2 rounded font-medium text-white transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

