import React from 'react'
import { AppProvider } from './context/AppContext'
import { TransactionProvider } from './context/TransactionContext'
import { SummaryCards } from './Component/dashboard/SummaryCards'
import { TopCategoriesBar } from './Component/dashboard/TopCategoriesBar'
import { BalanceChart } from './Component/dashboard/BalanceChart'
import { CategoryPieChart } from './Component/dashboard/CategoryPieChart'
import { Insights } from './Component/dashboard/Insights'
import { ThemeToggle } from './Component/UI/ThemeToggle'
import { RoleToggle } from './Component/UI/RoleToggle'
import { TransactionList } from './Component/transactions/TransactionList'

function AppContent() {
  return (
    <div className="lg:h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-y-auto lg:overflow-hidden">
      {/* Header Section (Grid 1) */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 px-4 py-2 sticky top-0 md:static z-[100] shadow-sm shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2">
          {/* Brand & Toggles (Mobile Row) */}
          <div className="flex w-full sm:w-auto justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">F</div>
              <h1 className="text-lg font-black text-gray-900 dark:text-white tracking-tight hidden md:block">FinanceDash</h1>
            </div>
            <div className="flex items-center gap-2 sm:hidden">
               <RoleToggle />
               <ThemeToggle />
            </div>
          </div>

          {/* Center Summary (Grid 1) */}
          <div className="flex-1 max-w-2xl px-2">
            <SummaryCards />
          </div>

          {/* Desktop Toggles */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <RoleToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content Sections (Grid 2 & 3) */}
      <main className="flex-1 max-w-[1600px] mx-auto w-full p-3 lg:p-4 gap-6 flex flex-col overflow-y-auto lg:overflow-y-auto">
        
        {/* Middle Section (Grid 2) - Flex row on desktop, Column on mobile */}
        {/* Using order classes to show Chart above List on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[42%] shrink-0 lg:shrink lg:flex-1 lg:min-h-0 order-2 lg:order-none">
          {/* Column 1: Transaction List */}
          <div className="lg:col-span-5 xl:col-span-4 h-[400px] lg:h-full lg:overflow-hidden order-2 lg:order-1">
             <TransactionList />
          </div>
          {/* Column 2: Main Balance Trend */}
          <div className="lg:col-span-7 xl:col-span-8 lg:h-full order-1 lg:order-2">
             <BalanceChart />
          </div>
        </div>

        {/* Bottom Section (Grid 3) - Monthly charts above List on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:h-[37%] shrink-0 order-1 lg:order-none ">
          <div className="lg:col-span-5  h-full">
            <CategoryPieChart />
          </div>
          <div className="lg:col-span-4 h-full">
            <TopCategoriesBar />
          </div>
          <div className="lg:col-span-3 h-full">
            <Insights />
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <TransactionProvider>
        <AppContent />
      </TransactionProvider>
    </AppProvider>
  )
}

export default App
