import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Slider from "./AdminViews/Slider";
import AdminNavebar from "./AdminViews/AdminNavebar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen w-full relative">
        <div
          className={`
    fixed top-0 left-0 h-full z-20
    ${isOpen ? "w-45" : "w-16"}
    bg-[#204F59] text-white transition-all duration-300 md:w-50
  `}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-4 ">
            {isOpen ? <RxCross2 /> : <IoIosMenu />}
          </button>
          <Slider isOpen={isOpen} />
        </div>

        <div className="flex-1 ml-16 bg-[#C6E1E4] overflow-auto md:ml-50">
          <AdminNavebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
