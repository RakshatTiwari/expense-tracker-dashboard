import React, { useContext } from 'react'
import { mainContext } from "../context/mainContextAPI"; 
import UpdateExpense from "./UpdateExpense.jsx";
import Swal from 'sweetalert2'

const ExpenseCard = ({data, no}) => {

  const {allExpenses, setAllExpenses} = useContext(mainContext)
  const deleteExpense = () => {
    const new_expense = allExpenses.filter((cur) => cur.id !== data.id)
    setAllExpenses(new_expense)

    Swal.fire({
      title: "Success!",
      text: "Transaction deleted successfully",
      icon: "success",
      confirmButtonText: "OK",
    })

    localStorage.setItem("expense", JSON.stringify(new_expense))
  }

  return (
    <tr className="hover:bg-yellow-100 dark:hover:bg-gray-600 transition">
      <td className="border-2 border-gray-700 dark:border-gray-500 dark:text-white py-3 px-3">
        {no}
      </td>
      <td className="border-2 border-gray-700 dark:border-gray-500 dark:text-white py-3 px-3">
        {data.description}
      </td>
      <td className="border-2 border-gray-700 dark:border-gray-500 dark:text-white py-3 px-3 font-semibold">
        {data.price}
      </td>
      <td className="border-2 border-gray-700 dark:border-gray-500 dark:text-white py-3 px-3 text-center align-middle">
        {data.purpose === "income" && (
          <span className="px-4 py-1 bg-green-300 rounded-full text-green-700">
            {"Income"}
          </span>
        )}
        {data.purpose === "expense" && (
          <span className="px-4 py-1 bg-red-300 rounded-full text-red-600">
            {"Expense"}
          </span>
        )}
      </td>
      <td className="border-2 border-gray-700 dark:border-gray-500 dark:text-white py-3 px-3">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={deleteExpense}
            className="bg-red-500 text-white px-3 flex rounded hover:bg-red-600"
          >
            Delete
          </button>
          <UpdateExpense data={data} />
        </div>
      </td>
    </tr>
  );
}

export default ExpenseCard
