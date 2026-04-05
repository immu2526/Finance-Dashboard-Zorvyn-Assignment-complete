import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Userfeature } from "../../../assets/AdminPannel";
import { setRole } from "../../../store/roleSlice";
import { FaRegUserCircle } from "react-icons/fa";

const UserNavebar = () => {
  let navigate = useNavigate();
  let { currentRole } = useSelector((store) => store.role);
  const dispatch = useDispatch();
  const location = useLocation();
  let handleRoleChange = (e) => {
    let role = e.target.value;
    dispatch(setRole(role));
  };
  let tab = Userfeature.filter((val) => val.path === location.pathname);
  return (
    <nav className="w-full h-10  flex justify-evenly items-center">
      <div className="">{tab?.[0]?.lable}</div>
      <div className="flex items-center gap-0">
        <span className="text-sm text-gray-500">Role:</span>
        <div className="w-full max-w-md mx-auto p-3 sm:p-6">
          <div className="">
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
        <FaRegUserCircle
          className="text-[50px] text-blue-600 "
          onClick={() => navigate("/user/profile")}
        />
      </div>
    </nav>
  );
};

export default UserNavebar;
