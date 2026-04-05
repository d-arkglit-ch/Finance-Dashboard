import { createContext ,useContext , useState , useEffect } from "react";
const AppContext =  createContext();
export const AppProvider=({children})=>{
const [role , setRole]= useState('admin');
const [darkMode , setDarkMode]= useState(()=>{
const saved = localStorage.getItem('darkMode');
return saved?JSON.parse(saved):false;
});
//since we are storing in localstorage its note  in usual react flow we gonna use useffect
useEffect(()=>{
    localStorage.setItem('darkMode' , JSON.stringify(darkMode));
    if(darkMode){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
},[darkMode])

const toggleRole =()=>setRole(prev=>prev==='admin'?'viewer' : 'admin')
const toggleTheme = ()=>setDarkMode(prev=>!prev);
return(
    <AppContext.Provider value={{toggleRole , toggleTheme, darkMode, role }}>
        {children}
    </AppContext.Provider>
);
};

export const useApp = ()=> useContext(AppContext);