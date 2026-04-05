import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { spendingByCategory } from "../../../data/mockdata";
const COLORS = ["#204F59", "#7F77DD", "#EF9F27", "#E24B4A"];

const UserInshightPipe = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mt-5">
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Spending Breakdown
      </h3>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={spendingByCategory}
          layout="vertical"
          margin={{ left: 10 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(val) => `${val}%`}
          />

          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            width={70}
          />

          <Tooltip
            formatter={(value) => [`${value}%`, "Spending"]}
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              border: "0.5px solid #e2e8f0",
            }}
            cursor={{ fill: "#f1f5f9" }}
          />

          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
            {spendingByCategory.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserInshightPipe;
