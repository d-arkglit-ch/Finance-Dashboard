import React from 'react';
import { useApp } from '../../context/AppContext';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { ArrowUpRight, ArrowDownLeft, Edit2, Trash2 } from 'lucide-react';

export const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  const { role } = useApp();
  const isIncome = transaction.type === 'income';

  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700/30 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all border border-gray-100 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-400/30 shadow-sm hover:shadow-md group">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl shrink-0 ${
          isIncome 
          ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400' 
          : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400'
        }`}>
          {isIncome ? (
            <ArrowUpRight size={18} strokeWidth={2.5} />
          ) : (
            <ArrowDownLeft size={18} strokeWidth={2.5} />
          )}
        </div>
        
        <div className="min-w-0">
          <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate capitalize leading-tight">
            {transaction.description}
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5">
             <span className="px-1.5 py-0.5 text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded uppercase tracking-wider">
               {transaction.category}
             </span>
             <span className="text-[10px] text-gray-400 dark:text-gray-500">
               {formatDate(transaction.date)}
             </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right">
          <p className={`text-sm font-black tabular-nums ${isIncome ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
          </p>
        </div>

        {role === 'admin' && (
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
            <button
              onClick={() => onEdit(transaction)}
              className="p-1.5 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
              title="Edit"
            >
              <Edit2 size={14} />
            </button>
            <button
              onClick={() => onDelete(transaction.id)}
              className="p-1.5 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
              title="Delete"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};