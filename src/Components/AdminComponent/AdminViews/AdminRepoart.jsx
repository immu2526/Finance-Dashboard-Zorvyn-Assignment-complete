import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";

const AdminRepoart = () => {
  const { list } = useSelector((store) => store.transactions);

  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2026");

  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = ["2024", "2025", "2026"];

  //  Month number
  const monthIndex = months.indexOf(selectedMonth);

  //  Filter transactions
  const filteredList = list.filter((txn) => {
    const txnDate = new Date(txn.date);
    const matchYear = txnDate.getFullYear() === Number(selectedYear);
    const matchMonth =
      selectedMonth === "All" || txnDate.getMonth() + 1 === monthIndex;
    return matchYear && matchMonth;
  });

  //  Summary calculate karo
  const totalIncome = filteredList
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = filteredList
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalSavings = totalIncome - totalExpense;

  //  Monthly summary
  const monthlyData = [
    { month: "January", income: 90000, expense: 28000, savings: 62000 },
    { month: "February", income: 95000, expense: 31000, savings: 64000 },
    { month: "March", income: 120000, expense: 35800, savings: 84200 },
  ];

  //  Export CSV
  const exportCSV = () => {
    const headers = ["Date,Description,Category,Type,Amount"];
    const rows = filteredList.map(
      (t) => `${t.date},${t.description},${t.category},${t.type},${t.amount}`
    );
    const csvContent = [...headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report-${selectedMonth}-${selectedYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  //  Print
  const handlePrint = () => window.print();

  //  Category badge color
  const badgeColor = (category) => {
    switch (category) {
      case "Food":
        return "bg-amber-50  text-amber-800";
      case "Travel":
        return "bg-blue-50   text-blue-800";
      case "Shopping":
        return "bg-purple-50 text-purple-800";
      case "Utilities":
        return "bg-red-50    text-red-800";
      case "Income":
        return "bg-green-50  text-green-800";
      default:
        return "bg-gray-50   text-gray-800";
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/*  Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-800">Reports</h2>
        <div className="flex gap-2">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-[#204F59] text-white rounded-lg hover:bg-[#2a6575] transition-all"
          >
            Export CSV
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all"
          >
            Print
          </button>
        </div>
      </div>

      {/*  Filter */}
      <div className="flex gap-3 items-center">
        <span className="text-sm text-gray-500">Filter by:</span>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#204F59]"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#204F59]"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/*Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="text-xs text-gray-400 mb-2">Total Income</div>
          <div className="text-2xl font-medium text-green-600">
            ₹{totalIncome.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {filteredList.filter((t) => t.type === "income").length}{" "}
            transactions
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="text-xs text-gray-400 mb-2">Total Expense</div>
          <div className="text-2xl font-medium text-red-500">
            ₹{totalExpense.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {filteredList.filter((t) => t.type === "expense").length}{" "}
            transactions
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="text-xs text-gray-400 mb-2">Net Savings</div>
          <div
            className={`text-2xl font-medium ${
              totalSavings >= 0 ? "text-[#204F59]" : "text-red-500"
            }`}
          >
            ₹{totalSavings.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {totalIncome > 0
              ? Math.round((totalSavings / totalIncome) * 100)
              : 0}
            % savings rate
          </div>
        </div>
      </div>

      {/*  Monthly Summary  */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Monthly Summary
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs text-gray-400 font-medium pb-3 px-2">
                  Month
                </th>
                <th className="text-right text-xs text-gray-400 font-medium pb-3 px-2">
                  Income
                </th>
                <th className="text-right text-xs text-gray-400 font-medium pb-3 px-2">
                  Expense
                </th>
                <th className="text-right text-xs text-gray-400 font-medium pb-3 px-2">
                  Savings
                </th>
                <th className="text-right text-xs text-gray-400 font-medium pb-3 px-2">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-2 text-sm text-gray-700">
                    {row.month}
                  </td>
                  <td className="py-3 px-2 text-sm text-green-600 text-right">
                    +₹{row.income.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-sm text-red-500 text-right">
                    -₹{row.expense.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-sm text-[#204F59] font-medium text-right">
                    ₹{row.savings.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-right">
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                      {Math.round((row.savings / row.income) * 100)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transactions  */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium text-gray-700">Transactions</h3>
          <span className="text-xs text-gray-400">
            {filteredList.length} records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs text-gray-400 font-medium pb-3 px-2">
                  Date
                </th>
                <th className="text-left text-xs text-gray-400 font-medium pb-3 px-2">
                  Description
                </th>
                <th className="text-left text-xs text-gray-400 font-medium pb-3 px-2">
                  Category
                </th>
                <th className="text-left text-xs text-gray-400 font-medium pb-3 px-2">
                  Type
                </th>
                <th className="text-right text-xs text-gray-400 font-medium pb-3 px-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-2 text-xs text-gray-400">
                    {txn.date}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-700">
                    {txn.description}
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${badgeColor(
                        txn.category
                      )}`}
                    >
                      {txn.category}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className={`text-xs font-medium ${
                        txn.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {txn.type === "income" ? "Income" : "Expense"}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-2 text-sm font-medium text-right ${
                      txn.type === "income" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {txn.type === "income" ? "+" : "−"}₹
                    {txn.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredList.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">
              Is month ka koi transaction nahi mila!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRepoart;
