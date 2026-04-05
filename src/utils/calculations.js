
export const calculateBalance = (transaction) => {
  return transaction.reduce((acc, t) => {
    if (t.type === 'income') return acc + t.amount;
    return acc - t.amount;
  }, 0)
}

export const calculateIncome = (transaction) => {
  return transaction.filter((t) => t.type === 'income').reduce((acc, t) => {
    return acc + t.amount;
  }, 0);
}

export const calculateExpenses = (transaction) => {
  return transaction.filter((t) => t.type === 'expense').reduce((acc, t) => {
    return acc + t.amount;
  }, 0);
}
   
    export const getCategoryData=(transactions)=>{
        const categoryMap={};
        transactions.filter((t)=>t.type==='expense')
        .forEach(( t)=>{
            categoryMap[t.category]=(categoryMap[t.category]||0)+t.amount;
        })
        return Object.entries(categoryMap).map(([name,value])=>({name,value})).sort((a,b)=>b.value-a.value);
    }

    export const getMonthlyData=(transactions)=>{
        const monthMap={};
        transactions.forEach((t)=>{
            const month = t.date.slice(0,7);
            if(!monthMap[month]){
                monthMap[month]={month:month.substring(5),income:0,expenses:0}
            }
            if(t.type==='income'){
            monthMap[month].income+=t.amount;
            }
            else{
                monthMap[month].expenses+=t.amount;
            }
        })

        let runningBalance=0;
        return Object.values(monthMap).map(m=>{
            runningBalance+=m.income-m.expenses;
            return{...m,balance:runningBalance}
        })
    }
    export const getTopCategories = (transactions, limit = 5) => {
  return getCategoryData(transactions).slice(0, limit);
};

export const getHighestSpendingCategory = (transactions) => {
  const categoryData = getCategoryData(transactions);
  return categoryData[0] || null;
};

export const getMonthlyComparison = (transactions) => {
  const monthlyData = getMonthlyData(transactions);
  if (monthlyData.length < 2) return null;
  
  const current = monthlyData[monthlyData.length - 1];
  const previous = monthlyData[monthlyData.length - 2];
  
  const expenseChange = ((current.expenses - previous.expenses) / previous.expenses) * 100;
  
  return {
    currentMonth: current.month,
    previousMonth: previous.month,
    expenseChange: expenseChange.toFixed(1),
    savedMore: expenseChange < 0
  };
};
