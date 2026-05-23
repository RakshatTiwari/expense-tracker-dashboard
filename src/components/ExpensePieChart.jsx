import React, { useContext } from "react"
import { mainContext } from "../context/mainContextAPI"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

const ExpensePieChart = () => {
  const { allExpenses } = useContext(mainContext)

  const income = allExpenses
    .filter((item) => item.purpose === "income")
    .reduce((sum, item) => sum + Number(item.price), 0)

  const expense = allExpenses
    .filter((item) => item.purpose === "expense")
    .reduce((sum, item) => sum + Number(item.price), 0)

  const balance = (income - expense)

  const data = [
    {
      name: "Expense",
      value: expense,
    },
    {
      name: "Balance",
      value: balance > 0 ? balance : 0,
    }
  ]

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div
      className="
    mt-10
    bg-amber-50
    dark:bg-gray-800
    rounded-xl
    p-5
    shadow-lg
    "
    >
      <h2 className="text-2xl font-bold mb-5 text-center">
        Income Distribution
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={120} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip formatter={(value) => `₹${Number(value).toFixed(2)}`} />

          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ExpensePieChart
