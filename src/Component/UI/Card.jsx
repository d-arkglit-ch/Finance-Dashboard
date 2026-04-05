import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export const CardValue = ({ children, className = '' }) => {
  return (
    <p className={`text-xl lg:text-2xl font-bold text-gray-900 dark:text-white ${className}`}>
      {children}
    </p>
  );
};
