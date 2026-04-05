import { useTransactions } from '../../context/TransactionContext';
import { getHighestSpendingCategory, getMonthlyComparison, calculateBalance } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatters';
import { Card } from '../UI/Card';
import {Brain, TrendingUp, TrendingDown, HandCoins, Flame}  from 'lucide-react'
export const Insights = () => {
  const { transactions } = useTransactions();
  
  const highestCategory = getHighestSpendingCategory(transactions);
  const monthlyComparison = getMonthlyComparison(transactions);
  const totalBalance = calculateBalance(transactions);

  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 shrink-0 flex items-center gap-2">
        <Brain /> Insights
      </h3>
      <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar pr-1">
        {highestCategory && (
          <div className="flex items-start gap-2 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
            <span className="text-xl shrink-0"><Flame /></span>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 leading-none mb-1">Highest Spending</p>
              <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
                {highestCategory.name} ({formatCurrency(highestCategory.value)})
              </p>
            </div>
          </div>
        )}
        
        {monthlyComparison && (
          <div className="flex items-start gap-2 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
            <span className="text-xl shrink-0">{monthlyComparison.savedMore ? <TrendingUp /> : <TrendingDown />}</span>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 leading-none mb-1">Comparison</p>
              <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
                {monthlyComparison.savedMore 
                  ? `Spent ${Math.abs(monthlyComparison.expenseChange)}% less than ${monthlyComparison.previousMonth}`
                  : `Spent ${monthlyComparison.expenseChange}% more than ${monthlyComparison.previousMonth}`
                }
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
          <span className="text-xl shrink-0"><HandCoins/></span>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 leading-none mb-1">Net Worth</p>
            <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
              {formatCurrency(totalBalance)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};