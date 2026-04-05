import React from "react";
import { useSelector } from "react-redux";
import BalanceChart from "./BalanceChart";
import SpendingChart from "./SpendingChart";
import RecentTransactions from "./RecentTransactions";

const SummaryCards = () => {
  let { summary } = useSelector((state) => state.transactions);
  console.log(summary);
  return (
    <>
      <div>
        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {/* Card 1 */}
          <div className=" h-[130px] bg-white p-2 rounded-md shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Total Balance</p>
            <h2 className="text-md  mt-2">
              ₹{summary.totalBalance?.toLocaleString()}
            </h2>
            <p className="text-green-500 text-sm mt-1">↑ 4.2% this month</p>
          </div>

          {/* Card 2 */}
          <div className=" h-[130px] bg-white p-5 rounded-md shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Total Income</p>
            <h2 className="text-md  mt-2">
              ₹{summary.totalIncome?.toLocaleString()}
            </h2>
            <p className="text-green-500 text-sm mt-1">Salary + freelance</p>
          </div>

          {/* Card 3 */}
          <div className=" h-[130px] bg-white p-5 rounded-md shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Total Expenses</p>
            <h2 className="text-md  mt-2">
              ₹{summary.totalExpenses?.toLocaleString()}
            </h2>
            <p className="text-red-500 text-sm mt-1">↑ 12% vs last month</p>
          </div>

          {/* Card 4 */}
          <div className=" h-[130px] bg-white p-5 rounded-md shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Savings Rate</p>
            <h2 className="text-md mt-2">70%</h2>
            <p className="text-green-500 text-sm mt-1">On track</p>
          </div>
        </div>

        <BalanceChart />

        <SpendingChart />
        <RecentTransactions />
      </div>
    </>
  );
};

export default SummaryCards;
