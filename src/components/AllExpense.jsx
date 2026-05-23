import React, { useContext} from 'react'
import { mainContext } from '../context/mainContextAPI'

const AllExpense = () => {
    const {allExpenses} = useContext(mainContext)
    const calculateMoney = (purpose) => {

        if (allExpenses.length === 0) {
            return 0
        }
        const expenses = allExpenses
            .filter((cur,i) => cur.purpose == purpose)
            .map((cur) => parseFloat(cur.price))
        
        if (expenses.length <= 1) {
            return expenses[0]
        }

        const price = expenses.reduce((pre, cur) => pre + cur, 0)
        return price
    }
    const totalMoney = calculateMoney("income") - calculateMoney("expense")

  return (
    <>
      <div className="grid gap-4 grid-cols-2">
        <div
          className="w-full lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-500 bg-amber-50 dark:border-gray-600 dark:bg-gray-800"
        >
          <p className="font-bold text-2xl text-green-600">Income</p>
          <p className="text-3xl font-bold text-end">
            ₹{calculateMoney("income") || 0}
          </p>
        </div>
        <div className="w-full lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-500 bg-amber-50 dark:border-gray-600 dark:bg-gray-800">
          <p className="font-bold text-2xl text-red-600">Expense</p>
          <p className="text-3xl font-bold text-end">
            ₹{calculateMoney("expense") || 0}
          </p>
        </div>
        <div className="col-span-2 py-5 px-3 rounded border border-gray-500 bg-indigo-50 dark:border-gray-600 dark:bg-mauve-400">
          <p className="font-bold text-2xl text-indigo-900">
            Total <span className="text-indigo-900">Balance</span>
          </p>
          <p className="text-end font-bold text-2xl">
            ₹{(totalMoney || 0).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default AllExpense
