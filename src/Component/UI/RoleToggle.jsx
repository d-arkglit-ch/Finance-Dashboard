import React from 'react';
import { useApp } from '../../context/AppContext';

export const RoleToggle = () => {
  const { role, toggleRole } = useApp();

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
      <button
        onClick={() => role !== 'admin' && toggleRole()}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
          role === 'admin' 
          ? 'bg-white dark:bg-gray-600 text-primary-600 shadow-sm' 
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
        }`}
      >
        Admin
      </button>
      <button
        onClick={() => role !== 'viewer' && toggleRole()}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
          role === 'viewer' 
          ? 'bg-white dark:bg-gray-600 text-primary-600 shadow-sm' 
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
        }`}
      >
        Viewer
      </button>
    </div>
  );
};