import { createContext , useContext , useState , useEffect, Children } from "react";
import {mockTransactions} from '../data/mockdata.js'
const TransactionContext =createContext();
export const TransactionProvider=({children})=>{
    const[transaction , setTransaction]= useState(()=>{
        const saved = localStorage.getItem('transactions');
        return saved?JSON.parse(saved) : mockTransactions;
    })

    const [filter , setFilter]= useState({search: '', category:'all' , type:'all'});
    useEffect(()=>{
        localStorage.setItem('transactions' , JSON.stringify(transaction))
    } , [transaction]);


    const addTransaction = (transactionData)=>{
        setTransaction(prev=>[...prev,{...transactionData, id:Date.now()}])
    }

    const editTransaction = (id , updatedTransaction)=>{
        setTransaction(prev=>prev.map(t=>t.id===id?{...t, ...updatedTransaction}:t));
    }

    const deleteTransaction=(id)=>{
        setTransaction(prev=>prev.filter(t=>t.id!==id))
    }

    const filteredTransactions = transaction.filter(t=>{
        const matchesSearch=t.description.toLowerCase().includes(filter.search.toLowerCase());
        const matchesType =filter.type==='all'||t.type===filter.type;
        const matchesCategory = filter.category==='all'||t.category===filter.category;
        return matchesSearch && matchesType && matchesCategory;
    })

    return(
        <TransactionContext.Provider value={{ 
            transactions: transaction, 
            transaction, 
            filteredTransactions, 
            filteredTransaction: filteredTransactions,
            filter, 
            setFilter, 
            addTransaction, 
            editTransaction, 
            deleteTransaction 
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
export const useTransactionContext = ()=> useContext(TransactionContext);
export const useTransactions = ()=> useContext(TransactionContext);