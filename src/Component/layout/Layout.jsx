import { Header } from './Header';
import { SummaryCards } from '../dashboard/SummaryCards';
import { BalanceChart } from '../dashboard/BalanceChart';
import { CategoryPieChart } from '../dashboard/CategoryPieChart';
import { TopCategoriesBar } from '../dashboard/TopCategoriesBar';
import { Insights } from '../dashboard/Insights';
import { TransactionList } from '../transactions/TransactionList';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SummaryCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <BalanceChart />
          </div>
          <div>
            <CategoryPieChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <TransactionList />
          </div>
          <div className="space-y-6">
            <TopCategoriesBar />
            <Insights />
          </div>
        </div>
      </main>
    </div>
  );
};