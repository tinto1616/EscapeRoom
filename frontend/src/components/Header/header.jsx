import css from './header.css';
import React from 'react';
import Button from '@mui/material/Button';
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/483/483947.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="font-bold text-xl text-orange-600">Escape the Hell</h1>
          </div>

          <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Thema’s</a>
            <a href="#" className="hover:text-orange-500 transition">Boek nu</a>
            <a href="#" className="hover:text-orange-500 transition">Contact</a>
          </nav>
          <button className="md:hidden text-gray-700 hover:text-orange-500">
            <Search />
          </button>
        </div>
      </header>
  );
}

export default Header;