import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserRepoart = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/user/deskboard");
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-white rounded-xl border border-gray-100 p-10 max-w-md w-full text-center flex flex-col items-center gap-4">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-4xl">
          🔒
        </div>

        {/* Title */}
        <h1 className="text-xl font-medium text-gray-800">Access Denied</h1>

        {/* Message */}
        <p className="text-sm text-gray-400 leading-relaxed">
          Do not have Access for this Page only
          <span className="text-[#204F59] font-medium">Admin</span> can access
          this page.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-gray-100 my-2" />

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={goHome}
            className="w-full bg-[#204F59] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-[#2a6575] transition-all"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full border border-gray-200 text-gray-600 rounded-lg py-2.5 text-sm hover:bg-gray-50 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRepoart;
