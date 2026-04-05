import React, { useState } from "react";
import UserNavebar from "./UserViews/UserNavebar";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import UserSlider from "./UserViews/UserSlider";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen w-full relative ">
        <div
          className={`
    fixed top-0 left-0 h-full z-20
    ${isOpen ? "w-45" : "w-16"}
    bg-[#204F59] text-white transition-all duration-300 md:w-50
  `}
        >
          <button className="md:hidden p-4 " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 /> : <IoIosMenu />}
          </button>
          <UserSlider isOpen={isOpen} />
        </div>

        <div className="flex-1 ml-16 bg-[#C6E1E4] overflow-auto md:ml-50">
          <UserNavebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
