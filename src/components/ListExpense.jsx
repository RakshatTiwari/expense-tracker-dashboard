import React, { useContext } from 'react'
import { mainContext } from "../context/mainContextAPI";
import ExpenseCard from "./ExpenseCard.jsx"

const ListExpense = () => {
    const {allExpenses} = useContext(mainContext)
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto my-10 border-2 border-gray-700 dark:border-amber-100">
          <thead>
            <tr>
              <th
                className="border-2 text-zinc-800 border-blue-900 dark:text-amber-50
dark:border-amber-100"
              >
                No.
              </th>
              <th
                className="border-2 text-zinc-800 border-gray-700 dark:text-amber-50
dark:border-amber-100"
              >
                Description
              </th>
              <th
                className="border-2 text-zinc-800 border-gray-700 dark:text-amber-50
dark:border-amber-100"
              >
                Price (₹)
              </th>
              <th
                className="border-2 text-zinc-800 border-gray-700 dark:text-amber-50
dark:border-amber-100"
              >
                Purpose
              </th>
              <th
                className="border-2 text-zinc-800 border-gray-700 dark:text-amber-50
dark:border-amber-100"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allExpenses.map((cur, i) => (
              <ExpenseCard data={cur} no={i + 1} key={cur.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListExpense
