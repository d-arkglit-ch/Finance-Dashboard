import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sun, Moon } from 'lucide-react';
export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-primary-500 transition-all duration-200 outline-none"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <span className="text-xl"><Sun /></span>
      ) : (
        <span className="text-xl"><Moon /></span>
      )}
    </button>
  );
};