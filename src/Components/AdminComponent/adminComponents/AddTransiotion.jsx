import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtransaction } from "../../../store/TransitionSlice/transition";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
const AddTransiotion = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(
      addtransaction({
        id: uuidv4(),
        description: formData.description,
        amount: Number(formData.amount),
        category: formData.category,
        type: formData.type,
        date: formData.date,
      })
    );
    toast.success("Transaction added successfully!");
    navigate("/admin/deskboard");
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log("name", name, "value", value);
    setFormData((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Go Back */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ←
        </button>
        <h2 className="text-lg font-medium text-gray-800">Add Transaction</h2>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. Zomato, Salary..."
              required
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#204F59]"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">
              Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="e.g. 500"
              required
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#204F59]"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">Type</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  className="accent-[#204F59]"
                  checked={formData.type === "expense"}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm text-red-500 font-medium">
                  Expense
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="income"
                  className="accent-[#204F59]"
                  checked={formData.type === "income"}
                  onChange={handleChange}
                  required
                />
                <span className="text-sm text-green-600 font-medium">
                  Income
                </span>
              </label>
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">
              Category
            </label>
            <select
              name="category"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#204F59]"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilities">Utilities</option>
              <option value="Income">Income</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#204F59]"
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex-1 bg-[#204F59] text-white rounded-lg py-2 text-sm font-medium hover:bg-[#2a6575] transition-all"
            >
              Add Transaction
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-200 text-gray-600 rounded-lg py-2 text-sm hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransiotion;
