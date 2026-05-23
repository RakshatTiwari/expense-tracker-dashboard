import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import AllExpense from './components/AllExpense'
import ListExpense from './components/ListExpense'
import ExpensePieChart from './components/ExpensePieChart'
import { useContext, useEffect } from 'react'
import { mainContext } from './context/mainContextAPI'

function App() {
  const { darkMode } = useContext(mainContext)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-h-screen transition-all duration-300">
        <Navbar />
        <main className="w-[80%] mx-auto">
          <AddExpense />
          <AllExpense />
          <ListExpense />
          <ExpensePieChart />
        </main>
      </div>
    </>
  ); 
}

export default App
