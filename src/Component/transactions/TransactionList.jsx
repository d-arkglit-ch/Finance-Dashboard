import { useState } from 'react';
import { useTransactions } from '../../context/TransactionContext';
import { useApp } from '../../context/AppContext';
import { TransactionItem } from './TransactionItem';
import { FilterBar } from './FilterBar';
import { AddTransactionModal } from './AddTransactionModal';
import { Card } from '../UI/Card';
import { Plus } from 'lucide-react';

export const TransactionList = () => {
  const { filteredTransactions, deleteTransaction } = useTransactions();
  const { role } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  return (
    <Card className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <div>
           <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
             Activity
           </h3>
           <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">
             Latest Transactions
           </p>
        </div>
        
        {role === 'admin' && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold rounded-xl transition-all shadow-lg active:scale-95"
          >
            <Plus size={14} />
            Add
          </button>
        )}
      </div>

      <FilterBar />

      <div className="flex-1 overflow-y-auto mt-6 pr-2 -mr-2 custom-scrollbar">
        {filteredTransactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-3">
               <Plus size={24} className="rotate-45" />
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              No transactions found
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 pb-6">
            {filteredTransactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <AddTransactionModal
          onClose={closeModal}
          editingTransaction={editingTransaction}
        />
      )}
    </Card>
  );
};