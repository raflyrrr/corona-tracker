import React from "react";
import { AdminEditInfo } from "../components";
import AdminLogin from "./AdminLogin";
const AdminHomeEditInfo = () => {
  if (!localStorage.getItem("username")) return <AdminLogin />;

  return (
    <div>
      <AdminEditInfo />
    </div>
  );
};

export default AdminHomeEditInfo;
