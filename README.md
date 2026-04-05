# FinanceDash - Premium Financial Dashboard

A sleek, responsive, and high-contrast financial management dashboard built with React 19 and Tailwind CSS 4. This application features a **True Black** professional aesthetic, data-driven visualizations, and a sophisticated typographic experience.



##  Features

### Professional Data Visualization
- **True Black Theme**: High-contrast, premium interface with `#000000` background and neutral grey surfaces.
- **Balance Trend**: Interactive area chart showing income vs. expenses with smooth bezier curves.
- **Monthly Spending**: Doughnut chart featuring an **integrated total summary** in the center for at-a-glance analysis.
- **Top Categories**: High-impact horizontal bar charts for expense distribution.

###  Premium Transaction Management
- **Redesigned Activity List**: Fintech-inspired cards with **Lucide icons** (`ArrowUpRight`, `ArrowDownLeft`) and color-coded status indicators.
- **Integrated Search & Filter**: Minimalist search bar with real-time filtering by category and transaction type.
- **Add Transactions**: Quick-entry modal for recording financial data with validation.

###  Smart Insights & Summary
- **Unified Summary Cards**: Prominent Balance, Income, and Expense cards in the top navigation.
- **AI-Driven Insights**: Contextual callouts for spending peaks, monthly comparisons, and net worth analysis.

###  UI/UX Excellence
- **Sophisticated Typography**: Uses a professional font stack of **Roboto** (Headings), **Open Sans**, **Lato**, and **Avenir**.
- **Responsive Layout**: Optimized `gap` system for mobile-first scrolling and perfectly balanced vertical desktops.
- **Role Toggle**: Seamlessly switch between **Admin** (Manage) and **Viewer** (Read-only) permissions.

##  Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Context API**: High-performance global state management for Transactions and Application settings.

## Project Structure

```text
src/
├── Component/
│   ├── dashboard/      # Visualization & Summary modules
│   ├── transactions/   # Transaction list & Redesigned Sidebar
│   └── UI/             # Premium UI Kit (Cards, Toggles, Modals)
├── context/            # Global Finance & UI state
├── utils/              # Calculators & Formatting helpers
├── styles/             # Global CSS & Tailwind 4 Theme Overrides
└── App.jsx             # Mobile-optimized Layout Engine
```

##  Getting Started

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

##  Layout Intelligence
The dashboard uses a custom **Gap-Driven Layout** that ensures sections never touch, even when manually ordered for mobile responsiveness.
- **Lg Screens**: Grid proportions (`42%` / `37%`) provide a "no-scroll" desktop experience.
- **Responsive Stacking**: Uses flex-ordering to prioritize charts on mobile while maintaining elegant spacing.

---

*Crafted for a high-end financial experience.*
