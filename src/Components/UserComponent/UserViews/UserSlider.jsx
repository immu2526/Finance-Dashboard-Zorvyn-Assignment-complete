import React from "react";
import { feature, Userfeature } from "../../../assets/AdminPannel";
import { Link, useLocation } from "react-router-dom";

const UserSlider = ({ isOpen }) => {
  const location = useLocation();
  return (
    <nav className="flex flex-col gap-1 p-2 mt-2">
      {Userfeature.map((val, ind) => (
        <Link
          key={ind}
          to={val.path}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
            ${
              location.pathname === val.path
                ? "bg-white/20 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
        >
          <span className="text-xl flex-shrink-0">{val.icon}</span>
          <span
            className={`text-sm whitespace-nowrap ${
              isOpen ? "block" : "hidden"
            }   md:block `}
          >
            {val.lable}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default UserSlider;
