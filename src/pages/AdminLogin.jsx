import React, { useState } from "react";
import { AdminLoginComponent } from "../components";
import { useHistory } from "react-router";

const AdminLogin = () => {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const history = useHistory();

  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      localStorage.setItem("username", details.username);
      localStorage.setItem("password", details.password);
      history.push("/adminhome");
    } else {
      setError("Username atau Password yang anda masukkan salah");
    }
  };

  return (
    <div>
      <AdminLoginComponent Login={Login} error={error} />
    </div>
  );
};

export default AdminLogin;
