import React from 'react';
import { useTransactions } from '../../context/TransactionContext';
import { Search, SlidersHorizontal } from 'lucide-react';

export const FilterBar = () => {
  const { filter, setFilter } = useTransactions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          name="search"
          placeholder="Search activity..."
          value={filter.search}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-100 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 outline-none transition-all placeholder:text-gray-400"
        />
      </div>
      
      {/* Filter Selects */}
      <div className="grid grid-cols-2 gap-2">
        <div className="relative group">
          <select
            name="type"
            value={filter.type}
            onChange={handleChange}
            className="w-full pl-3 pr-8 py-1.5 text-xs rounded-lg border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">
            <SlidersHorizontal size={12} />
          </span>
        </div>

        <div className="relative group">
          <select
            name="category"
            value={filter.category}
            onChange={handleChange}
            className="w-full pl-3 pr-8 py-1.5 text-xs rounded-lg border border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Freelance">Freelance</option>
            <option value="Investment">Investment</option>
            <option value="Shopping">Shopping</option>
          </select>
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">
            <SlidersHorizontal size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};