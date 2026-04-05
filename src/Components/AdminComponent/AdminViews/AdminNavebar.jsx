import React from "react";
import { useLocation } from "react-router-dom";
import { feature } from "../../../assets/AdminPannel";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../store/roleSlice";

const AdminNavebar = () => {
  let { currentRole } = useSelector((store) => store.role);
  const dispatch = useDispatch();
  const location = useLocation();
  let tab = feature.filter((val) => val.path === location.pathname);

  let handleRoleChange = (event) => {
    console.log(event.target.value);
    let role = event.target.value;
    dispatch(setRole(role));
  };

  return (
    <nav className="w-full h-10  flex justify-evenly items-center">
      <div className="">{tab?.[0]?.lable}</div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-gray-500">Role:</span>
        <div className="w-full max-w-md mx-auto p-2 sm:p-6">
          <div className="space-y-3">
            <select
              id="role-select"
              value={currentRole}
              onChange={handleRoleChange}
              className="
        block w-full sm:max-w-xs md:max-w-sm lg:max-w-xs 
        px-3 sm:px-4 py-2.5 sm:py-3 
        text-xs sm:text-sm font-medium 
        text-gray-900 bg-white 
        border border-gray-200 rounded-lg sm:rounded-xl 
        shadow-sm hover:shadow-md hover:border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        transition-all duration-200 cursor-pointer 
        appearance-none bg-no-repeat 
        bg-[right_0.75rem_center/1.2rem_auto] sm:bg-[right_0.75rem_center/1.5rem_auto] 
        pr-8 sm:pr-10
      "
            >
              <option value="admin">👑 Admin</option>
              <option value="user">👤 User</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavebar;
