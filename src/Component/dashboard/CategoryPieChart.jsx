import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTransactions } from '../../context/TransactionContext';
import { getCategoryData } from '../../utils/calculations';
import { useApp } from '../../context/AppContext';
import { Card } from '../UI/Card';
import { categoryColors } from '../../data/mockdata';
import { formatCurrency } from '../../utils/formatters';

export const CategoryPieChart = () => {
  const { transactions } = useTransactions();
  const { darkMode } = useApp();
  const data = getCategoryData(transactions);

  // Total monthly spending
  const totalSpend = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full flex flex-col p-4">
      <div className="mb-2 shrink-0">
        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
          Monthly Spending
        </h3>
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">
          Expense Distribution
        </p>
      </div>

      <div className="flex-1 min-h-[300px] relative">
        {/* Centered Total Summary */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
             Total
           </p>
           <p className="text-2xl font-black text-gray-900 dark:text-white mt-1">
             {formatCurrency(totalSpend)}
           </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={categoryColors[entry.name] || '#6366F1'} 
                  stroke={darkMode ? '#0b0b0b' : '#ffffff'}
                  strokeWidth={3}
                  className="transition-all duration-300"
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: darkMode ? '#111111' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                color: darkMode ? '#ffffff' : '#000000',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ fontWeight: 'bold' }}
              formatter={(value) => formatCurrency(value)}
            />
            <Legend 
              verticalAlign="bottom" 
              iconType="circle" 
              wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};