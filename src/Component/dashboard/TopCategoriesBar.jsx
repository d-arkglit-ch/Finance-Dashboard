import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTransactions } from '../../context/TransactionContext';
import { getTopCategories } from '../../utils/calculations';
import { useApp } from '../../context/AppContext';
import { Card } from '../UI/Card';

export const TopCategoriesBar = () => {
  const { transactions } = useTransactions();
  const { darkMode } = useApp();
  const data = getTopCategories(transactions, 5);

  const textColor = darkMode ? '#e5e7eb' : '#374151';
  const gridColor = darkMode ? '#374151' : '#e5e7eb';

  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 shrink-0">
        Top Spending Categories
      </h3>
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis type="number" stroke={textColor} />
            <YAxis dataKey="name" type="category" stroke={textColor} width={80} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                border: 'none',
                borderRadius: '8px',
                color: darkMode ? '#ffffff' : '#000000'
              }}
              formatter={(value) => `$${value}`}
            />
            <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};