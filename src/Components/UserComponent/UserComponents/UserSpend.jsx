import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { spendingByCategory } from "../../../data/mockdata";
const COLORS = ["#204F59", "#7F77DD", "#EF9F27", "#E24B4A"];

const UserSpendingChart = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-4 border border-gray-100 mt-2">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Spending by Category
        </h3>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={spendingByCategory}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {spendingByCategory.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, "Spending"]}
              contentStyle={{
                fontSize: "12px",
                borderRadius: "8px",
                border: "0.5px solid #e2e8f0",
              }}
            />

            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default UserSpendingChart;
