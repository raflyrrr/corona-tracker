import React from "react";
import { AdminAddInfo } from "../components";
import AdminLogin from "./AdminLogin";

class AdminHomeAddInfo extends React.Component {
  render() {
    if (!localStorage.getItem("username")) return <AdminLogin />;
    return (
      <div>
        <AdminAddInfo />
      </div>
    );
  }
}
export default AdminHomeAddInfo;
