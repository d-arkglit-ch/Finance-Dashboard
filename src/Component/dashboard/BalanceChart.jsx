import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTransactions } from '../../context/TransactionContext';
import { getMonthlyData } from '../../utils/calculations';
import { useApp } from '../../context/AppContext';
import { Card } from '../UI/Card';

export const BalanceChart = () => {
  const { transactions } = useTransactions();
  const { darkMode } = useApp();
  const data = getMonthlyData(transactions);

  const textColor = darkMode ? '#e5e7eb' : '#374151';
  const gridColor = darkMode ? '#374151' : '#e5e7eb';

  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Balance Trend
      </h3>
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: darkMode ? '#1f2937' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              color: darkMode ? '#ffffff' : '#000000'
            }} 
          />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" strokeWidth={2} name="Balance" />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} name="Income" />
          <Line type="monotone" dataKey="expenses" stroke="#ff7300" strokeWidth={2} name="Expenses" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </Card>
  );
};