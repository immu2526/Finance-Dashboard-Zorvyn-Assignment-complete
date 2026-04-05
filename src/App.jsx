import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import CheckAuth from "./CheckAuth";
import AdminLayout from "./Components/AdminComponent/AdminLayout";
import AdminDeskboard from "./Components/AdminComponent/AdminViews/AdminDeskboard";
import AdminInshight from "./Components/AdminComponent/AdminViews/AdminInshight";
import AdminRepoart from "./Components/AdminComponent/AdminViews/AdminRepoart";
import AdminTransitions from "./Components/AdminComponent/AdminViews/AdminTransitions";
import { useSelector } from "react-redux";
import UserLayout from "./Components/UserComponent/UserLayout";
import UserDeskboard from "./Components/UserComponent/UserViews/UserDeskboard";
import UserInshight from "./Components/UserComponent/UserViews/UserInshight";
import UserRepoart from "./Components/UserComponent/UserViews/UserRepoart";
import UserTransition from "./Components/UserComponent/UserViews/UserTransition";
import AddTransiotion from "./Components/AdminComponent/adminComponents/AddTransiotion";
import UserProfile from "./Components/UserComponent/UserViews/Profile";

function App() {
  let { currentRole } = useSelector((store) => store.role);
  console.log(currentRole);
  return (
    <>
      <Routes>
        {/* Admin router handle */}

        <Route
          path="/admin"
          element={
            <CheckAuth user={currentRole}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="deskboard" element={<AdminDeskboard />} />
          <Route path="insights" element={<AdminInshight />} />
          <Route path="report" element={<AdminRepoart />} />
          <Route path="transition" element={<AdminTransitions />} />
          <Route path="new" element={<AddTransiotion />} />
        </Route>

        {/* user Route */}

        <Route
          path="/user"
          element={
            <CheckAuth user={currentRole}>
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route path="deskboard" element={<UserDeskboard />} />
          <Route path="insights" element={<UserInshight />} />
          <Route path="report" element={<UserRepoart />} />
          <Route path="transition" element={<UserTransition />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
