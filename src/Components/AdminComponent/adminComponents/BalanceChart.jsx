import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { balanceTrend } from "../../../data/mockdata";

const BalanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Balance Trend — Last 6 Months
      </h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={balanceTrend}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d30de" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0d0dda" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#0f5ac4" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 11, fill: "#135dc4" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(val) => `₹${val / 1000}k`}
          />

          <Tooltip
            formatter={(value) => [`₹${value.toLocaleString()}`, "Balance"]}
            contentStyle={{
              fontSize: "12px",
              borderRadius: "8px",
              border: "0.5px solid #e2e8f0",
            }}
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#12dae5"
            strokeWidth={2}
            fill="url(#colorBalance)"
            dot={{ fill: "#22c6eb", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
