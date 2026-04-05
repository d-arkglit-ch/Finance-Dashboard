import { useTransactions } from '../../context/TransactionContext';
import { calculateBalance, calculateIncome, calculateExpenses } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatters';
import { Card, CardTitle, CardValue } from '../UI/Card';

export const SummaryCards = () => {
  const { transactions } = useTransactions();
  
  const balance = calculateBalance(transactions);
  const income = calculateIncome(transactions);
  const expenses = calculateExpenses(transactions);

  const cards = [
    { title: 'Balance', value: balance, color: 'text-blue-600 dark:text-blue-400' },
    { title: 'Income', value: income, color: 'text-green-600 dark:text-green-400' },
    { title: 'Expenses', value: expenses, color: 'text-red-500 dark:text-red-400' },
  ];

  return (
    <div className="flex items-center gap-2 lg:gap-3 overflow-x-auto no-scrollbar py-1">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center px-3 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 min-w-[90px] lg:min-w-[120px] shadow-sm shrink-0"
        >
          <span className="text-[9px] lg:text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 tracking-tight">
            {card.title}
          </span>
          <span className={`text-xs lg:text-sm font-black ${card.color}`}>
            {formatCurrency(card.value)}
          </span>
        </div>
      ))}
    </div>
  );
};