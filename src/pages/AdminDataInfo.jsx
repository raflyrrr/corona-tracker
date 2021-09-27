import React from "react";
import { AdminDataComponent } from "../components";
import AdminLogin from './AdminLogin'

class AdminDataInfo extends React.Component {
  render() {
    if (!localStorage.getItem("username")) return <AdminLogin />;
    return (
      <div>
        <AdminDataComponent />
      </div>
    );
  }
}
export default AdminDataInfo;
