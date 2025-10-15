import css from './header.css';
import React from 'react';
import { Search } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
 <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          <div className="flex items-center space-x-2">
            <h1 className="font-bold text-xl text-orange-600">Escape the Hell</h1>
          </div>

          <nav className="hidden md:flex md:flex-row md:items-center md:justify-center space-x-6 font-medium text-gray-700 ">
            <Link to="/map" className="hover:text-orange-500 transition">Map</Link>
              <Link to="/scan" className="hover:text-orange-500 transition">Scannen</Link>
            <Link to="/leaderboard" className="hover:text-orange-500 transition">Leaderboard</Link>
            <Link to="/login" className="text-orange-500 outline outline-orange-500 hover:text-white hover:bg-orange-500 p-2 rounded-full transition">Login</Link>
          </nav>

          <button className="md:hidden text-gray-700 hover:text-orange-500">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>
  );
}

export default Header;