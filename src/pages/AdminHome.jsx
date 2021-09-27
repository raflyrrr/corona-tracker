import React from "react";
import { AdminHomeComponent } from "../components";
import AdminLogin from "./AdminLogin";

class AdminHome extends React.Component {
  render() {
    if (!localStorage.getItem("username")) return <AdminLogin />;
    return (
      <div>
        <AdminHomeComponent />
      </div>
    );
  }
}
export default AdminHome;
