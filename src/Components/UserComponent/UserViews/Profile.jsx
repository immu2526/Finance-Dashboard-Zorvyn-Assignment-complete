import { useSelector } from "react-redux";

const UserProfile = () => {
  const { currentRole } = useSelector((store) => store.role);

  const user = {
    name: "Arjun Kumar",
    email: "arjun.kumar@email.com",
    phone: "+91 98765 43210",
    location: "Delhi, India",
    bio: "Finance enthusiast & full stack developer.",
    memberSince: "January 2026",
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="p-6 max-w-lg mx-auto flex flex-col gap-4">
      <h2 className="text-lg font-medium text-gray-800">My Profile</h2>

      <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-[#204F59] flex items-center justify-center text-white text-2xl font-medium">
          {initials}
        </div>

        <div className="text-center">
          <h3 className="text-base font-medium text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>

        <span
          className={`text-xs px-4 py-1 rounded-full
          ${
            currentRole === "admin"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-blue-50  text-blue-700  border border-blue-200"
          }`}
        >
          {currentRole === "admin" ? "Admin" : "Viewer"}
        </span>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Personal Information
        </h3>

        <div className="flex flex-col gap-3">
          {[
            { label: "Full Name", value: user.name },
            { label: "Email", value: user.email },
            { label: "Phone", value: user.phone },
            { label: "Location", value: user.location },
            { label: "Member Since", value: user.memberSince },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-2 border-b border-gray-50"
            >
              <span className="text-xs text-gray-400">{item.label}</span>
              <span className="text-sm text-gray-700">{item.value}</span>
            </div>
          ))}

          <div className="py-2">
            <span className="text-xs text-gray-400">Bio</span>
            <p className="text-sm text-gray-700 mt-1">{user.bio}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
          <div className="text-xs text-gray-400 mb-1">Role</div>
          <div className="text-sm font-medium text-[#204F59] capitalize">
            {currentRole}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
          <div className="text-xs text-gray-400 mb-1">Status</div>
          <div className="text-sm font-medium text-green-600">Active</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
          <div className="text-xs text-gray-400 mb-1">Since</div>
          <div className="text-sm font-medium text-gray-700">Jan 2026</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
