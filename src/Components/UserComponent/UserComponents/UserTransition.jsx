import React, { useState } from "react";
import { useSelector } from "react-redux";

const Transition = () => {
  const [val, setVal] = useState("");
  let { list } = useSelector((state) => state.transactions);

  let inputHandler = (e) => {
    let inputVal = e.target.value;
    setVal(inputVal);
  };

  let filterList = list.filter((value) =>
    value.category.toUpperCase().includes(val.toUpperCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mt-2">
      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Recent Transactions
      </h3>
      <label htmlFor="input-base ">Search</label>
      <div class="max-w-sm w-fullspace-y-3 flex items-center gap-2 mb-3">
        <input
          id="input-base"
          type="text"
          value={val}
          class="py-2.5 sm:py-3 px-4 rounded-lg block w-full bg-layer border-layer-line sm:text-sm text-foreground  border border-gray-600  placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
          placeholder="This is placeholder"
          onChange={inputHandler}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs text-gray-400 font-medium pb-2 px-2">
                Date
              </th>
              <th className="text-left text-xs text-gray-400 font-medium pb-2 px-2">
                Description
              </th>
              <th className="text-left text-xs text-gray-400 font-medium pb-2 px-2">
                Category
              </th>
              <th className="text-left text-xs text-gray-400 font-medium pb-2 px-2">
                Type
              </th>
              <th className="text-right text-xs text-gray-400 font-medium pb-2 px-2">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {filterList.map((txn) => (
              <tr
                key={txn.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-all"
              >
                <td className="py-2 px-2 text-xs text-gray-500">{txn.date}</td>

                <td className="py-2 px-2 text-sm text-gray-700">
                  {txn.description}
                </td>

                <td className="py-2 px-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full
                    ${txn.category === "Food" && "bg-amber-50  text-amber-800"}
                    ${txn.category === "Travel" && "bg-blue-50   text-blue-800"}
                    ${
                      txn.category === "Shopping" &&
                      "bg-purple-50 text-purple-800"
                    }
                    ${
                      txn.category === "Utilities" &&
                      "bg-red-50    text-red-800"
                    }
                    ${
                      txn.category === "Income" && "bg-green-50  text-green-800"
                    }
                  `}
                  >
                    {txn.category}
                  </span>
                </td>

                {/* Type */}
                <td className="py-2 px-2">
                  <span
                    className={`text-xs font-medium
                    ${txn.type === "income" ? "text-green-600" : "text-red-500"}
                  `}
                  >
                    {txn.type === "income" ? "Income" : "Expense"}
                  </span>
                </td>

                {/* Amount */}
                <td
                  className={`py-2 px-2 text-sm font-medium text-right
                  ${txn.type === "income" ? "text-green-600" : "text-red-500"}
                `}
                >
                  {txn.type === "income" ? "+" : "−"}₹
                  {txn.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {list.length === 0 && (
          <div className="text-center py-10 text-gray-400 text-sm">
            Koi transactions nahi hain!
          </div>
        )}
      </div>
    </div>
  );
};

export default Transition;
