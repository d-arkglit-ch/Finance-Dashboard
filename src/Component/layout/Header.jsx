import { RoleToggle } from '../UI/RoleToggle';
import { ThemeToggle } from '../UI/ThemeToggle';

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Finance Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <RoleToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};