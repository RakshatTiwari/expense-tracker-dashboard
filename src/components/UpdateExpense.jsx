import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { useContext, useState } from "react"
import { mainContext } from "../context/mainContextAPI";
import Swal from "sweetalert2"

export default function UpdateExpense({data}) {
  let [isOpen, setIsOpen] = useState(false)

  const {allExpenses, setAllExpenses} = useContext(mainContext);
  
  const onSubmitHandler = (event) => {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const price = formData.get("price") || 0;
        const description = formData.get("description") || '';
        const purpose = formData.get("purpose") || '';

        if (!description || price <= 0 || !purpose) {
            alert("Please fill all fields correctly")
            return
        }

        const exp = {
            price,
            description,
            purpose
        }

        const new_expense = allExpenses.map((cur) => cur.id === data.id ? { ...cur, ...exp } : cur);

        setAllExpenses(new_expense)
        localStorage.setItem("expense", JSON.stringify(new_expense))

        Swal.fire({
            title: "Success!",
            text: "Transaction updated successfully",
            icon: "success",
            confirmButtonText: "OK"
        })
        close()

    } catch(error) {
        console.error(error.message)
    }}

    function open() {
    setIsOpen(true)
    }

    function close() {
    setIsOpen(false)
    }

    return (
      <>
        <Button
          onClick={open}
          className="rounded bg-orange-400 px-3 text-white data-hover:bg-orange-600"
        >
          Update
        </Button>

        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 dark:text-white border border-gray-700 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <DialogTitle
                  as="div"
                  className="text-base/7 font-medium text-black dark:text-white flex items-center justify-between"
                >
                  <h3>UPDATE</h3>
                  <button onClick={close} className="text-gray-500 hover:text-red-700">
                    X
                  </button>
                </DialogTitle>
                <form onSubmit={onSubmitHandler}>
                  <div className="mb-3">
                    <label htmlFor="price">Price (in ₹)</label>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      required
                      className="w-full py-2 border rounded border-gray-400 outline-none px-3"
                      id="price"
                      defaultValue={data?.price}
                      placeholder="Enter price"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      type="text"
                      name="description"
                      required
                      className="w-full py-1 border rounded border-gray-400 outline-none px-3"
                      id="description"
                      defaultValue={data?.description}
                      placeholder="Enter description"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="purpose">Purpose</label>
                    <select
                      className="w-full lg:py-2 py-1 border rounded-md border-gray-400 outline-none px-3"
                      id="purpose"
                      defaultValue={data?.purpose}
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
                      Update Transaction
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    );
}
