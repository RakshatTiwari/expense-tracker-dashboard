import React from 'react'
import { useContext } from 'react';
import { mainContext } from "../context/mainContextAPI";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(mainContext);
  return (
    <header className="bg-gray-800 dark:bg-teal-700 transition-colors duration-300">
      <nav className="w-[80%] mx-auto flex items-center justify-between py-2">
        <h1
          className="text-2xl font-extrabold text-white dark:text-gray-200 text-shadow-2xs"
        >
          Expense Management Tracker
        </h1>
        <ul className="flex items-center justify-center gap-x-3 text-white font-medium">
          <li>
            <a href="/" className="text-white dark:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white dark:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-white dark:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-white px-3 py-2 rounded text-white dark:text-mauve-100 hover:text-gray-400 dark:hover:text-amber-200"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar
