import React, { useContext, useState } from 'react'
import { mainContext } from '../context/mainContextAPI';
import Swal from 'sweetalert2'

const AddExpense = () => {
    const [isHide, setIsHide] = useState(true);

    const {allExpenses, setAllExpenses} = useContext(mainContext);

    const onSubmitHandler = (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const price = parseFloat(formData.get("price")) || 0;
            const description = formData.get("description") || '';
            const purpose = formData.get("purpose") || '';

            if (!description || price <= 0 || !purpose) {
                alert("Please fill all fields correctly")
                return
            }

            const exp = {
                price,
                description,
                purpose,
                created_at: new Date().toISOString(),
                id: Date.now()
            }

            const new_expense = [
                ...allExpenses,
                exp
            ]

            setAllExpenses(new_expense)
            localStorage.setItem("expense", JSON.stringify(new_expense))

            Swal.fire({
              title: "Success!",
              text: "Transaction added successfully",
              icon: "success",
              confirmButtonText: "OK"
            });
            event.target.reset()
            setIsHide(true)

        } catch(error) {
            console.error(error.message)
        }
    }
  return (
    <>
      <div className="flex justify-end py-3">
        <button
          onClick={() => setIsHide(!isHide)}
          className="px-3 py-2 bg-indigo-500 text-black rounded cursor-pointer hover:bg-blue-400"
        >
          {isHide ? "Add +" : "Close X"}
        </button>
      </div>
      {!isHide && (
        <div className="py-5">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="price">Price (in ₹)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                required
                className="w-full py-2 border dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-600
                    rounded border-gray-400 outline-none px-3"
                id="price"
                placeholder="Enter price"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                required
                className="w-full py-1 border dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-600
                    rounded border-gray-400 outline-none px-3"
                id="description"
                placeholder="Enter description"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="purpose">Purpose</label>
              <select
                className="w-full lg:py-2 py-1 border dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-600
                    rounded border-gray-400 outline-none px-3"
                id="purpose"
                name="purpose"
                required
              >
                <option disabled defaultValue>
                  Select a category
                </option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="mb-3">
              <button className="w-full lg:py-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add New Transaction
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddExpense
