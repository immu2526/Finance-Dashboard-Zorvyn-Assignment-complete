import { v4 as uuidv4 } from "uuid";

export const summaryData = {
  totalBalance: 84200,
  totalIncome: 120000,
  totalExpenses: 35800,
  savingsRate: 70,
};

export const transactions = [
  {
    id: uuidv4(),
    date: "2026-04-01",
    description: "Zomato",
    category: "Food",
    type: "expense",
    amount: 480,
  },
  {
    id: uuidv4(),
    date: "2026-03-31",
    description: "Salary",
    category: "Income",
    type: "income",
    amount: 90000,
  },
  {
    id: uuidv4(),
    date: "2026-03-30",
    description: "Uber",
    category: "Travel",
    type: "expense",
    amount: 320,
  },
  {
    id: uuidv4(),
    date: "2026-03-29",
    description: "Amazon",
    category: "Shopping",
    type: "expense",
    amount: 2100,
  },
  {
    id: uuidv4(),
    date: "2026-03-28",
    description: "Electricity",
    category: "Utilities",
    type: "expense",
    amount: 1200,
  },
  {
    id: uuidv4(),
    date: "2026-03-27",
    description: "Freelance",
    category: "Income",
    type: "income",
    amount: 30000,
  },
  {
    id: uuidv4(),
    date: "2026-03-26",
    description: "Swiggy",
    category: "Food",
    type: "expense",
    amount: 350,
  },
  {
    id: uuidv4(),
    date: "2026-03-25",
    description: "Petrol",
    category: "Travel",
    type: "expense",
    amount: 1500,
  },
];

export const balanceTrend = [
  { month: "Oct", balance: 45000 },
  { month: "Nov", balance: 52000 },
  { month: "Dec", balance: 48000 },
  { month: "Jan", balance: 61000 },
  { month: "Feb", balance: 72000 },
  { month: "Mar", balance: 84200 },
];

export const spendingByCategory = [
  { name: "Food", value: 33 },
  { name: "Travel", value: 23 },
  { name: "Shopping", value: 21 },
  { name: "Utilities", value: 23 },
];
