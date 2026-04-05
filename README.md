# 💰 Finance Dashboard — Zorvyn FinTech

A responsive Finance Dashboard built with React, Redux Toolkit,
Tailwind CSS, and Recharts for the Zorvyn FinTech internship assignment.

---

## 🚀 Live Demo

> Run locally — steps neeche hain

---

## ✨ Features

- 📊 Dashboard — Balance trend, Spending charts, Recent transactions
- 💸 Transactions — Search, Filter, Sort (Admin: Add/Delete)
- 💡 Insights — Income vs Expense, Category breakdown, Smart tips
- 📄 Reports — Monthly summary, Export CSV, Print (Admin only)
- 👤 Profile — User profile page
- 🔐 Role Based UI — Admin aur Viewer alag alag access
- 📱 Responsive — Mobile aur Desktop dono pe kaam karta hai

---

## 🛠️ Tech Stack

| Technology      | Use                    |
| --------------- | ---------------------- |
| React 18        | Frontend framework     |
| Redux Toolkit   | State management       |
| React Router    | Navigation & routing   |
| Tailwind CSS    | Styling                |
| Recharts        | Charts & visualization |
| React Hot Toast | Notifications          |
| React Icons     | Icons                  |
| Vite            | Build tool             |

---

## 📁 Folder Structure

```
src/
├── assets/
│   └── AdminPannel.js
├── Components/
│   ├── AdminComponent/
│   │   ├── adminComponents/
│   │   │   ├── AddTransaction.jsx
│   │   │   ├── BalanceChart.jsx
│   │   │   ├── RecentTransactions.jsx
│   │   │   ├── SpendingChart.jsx
│   │   │   ├── SummaryCards.jsx
│   │   │   └── CategoryBars.jsx
│   │   ├── AdminViews/
│   │   │   ├── AdminDeskboard.jsx
│   │   │   ├── AdminInshight.jsx
│   │   │   ├── AdminNavebar.jsx
│   │   │   ├── AdminRepoart.jsx
│   │   │   ├── AdminTransitions.jsx
│   │   │   ├── Slider.jsx
│   │   │   └── AdminProfile.jsx
│   │   └── AdminLayout.jsx
│   ├── UserComponent/
│   │   ├── UserComponents/
│   │   │   ├── UserBalance.jsx
│   │   │   ├── UserSpend.jsx
│   │   │   ├── UserSpending.jsx
│   │   │   ├── UserSummaryCard.jsx
│   │   │   └── UserTransition.jsx
│   │   ├── UserViews/
│   │   │   ├── UserDeskboard.jsx
│   │   │   ├── UserInshight.jsx
│   │   │   ├── UserNavebar.jsx
│   │   │   ├── UserRepoart.jsx
│   │   │   ├── UserTransitions.jsx
│   │   │   ├── UserSlider.jsx
│   │   │   └── Profile.jsx
│   │   └── UserLayout.jsx
│   └── UnAuthPage.jsx
├── data/
│   └── mockData.js
├── store/
│   ├── store.js
│   ├── roleSlice.js
│   └── TransitionSlice/
│       └── transition.js
├── CheckAuth.jsx
├── App.jsx
└── main.jsx
```

## ⚙️ Setup & Installation

### 1. Clone karo

```bash
git clone https://github.com/immu2526/finance-dashboard.git
cd finance-dashboard
```

### 2. Dependencies install karo

```bash
npm install
```

### 3. Run karo

```bash
npm run dev
```

### 4. Browser mein open karo

```
http://localhost:5173
```

---

## 🔐 Role Based Access

| Feature           | Admin | Viewer |
| ----------------- | ----- | ------ |
| View Dashboard    | ✅    | ✅     |
| View Transactions | ✅    | ✅     |
| Add Transaction   | ✅    | ❌     |
| View Insights     | ✅    | ✅     |
| View Reports      | ✅    | ❌     |
| Export CSV        | ✅    | ❌     |

> Role switch karne ke liye — Navbar mein dropdown use karo

---

## 📊 State Management

Redux Toolkit use kiya hai 2 slices ke saath:

- **roleSlice** — Current role manage karta hai (admin/user)
- **transactionSlice** — Transactions list aur summary manage karta hai

---

## 🎨 Design Decisions

- **Color** `#204F59` — Zorvyn brand color use kiya
- **Sidebar** — Collapsible, mobile responsive
- **Charts** — Recharts AreaChart + PieChart + BarChart
- **Mock Data** — Static data in `mockData.js`

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "recharts": "^2.x",
  "react-hot-toast": "^2.x",
  "react-icons": "^5.x",
  "tailwindcss": "^3.x"
}
```

---

## 👤 Author

**MD Imran**  
Frontend Developer Intern Applicant  
📧 mdimran253921@email.com  
🔗 github.com/immu2526

---

## 📝 Note

> This project uses mock/static data only.
> No backend or database is connected.
> Built for Zorvyn FinTech internship screening assignment.
