import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin({ Login, error }) {
  const history = useHistory();

  const [details, setDetails] = useState({ username: "", password: "" });
  const [loggedin, setLoggedIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      Login(details);
    }, 1000);
  };

  const loginDelay = () => {
    setLoggedIn(true);
    setTimeout(() => {
      setLoggedIn(false);
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      history.push("/adminhome");
    }
  }, [history]);

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Covices Admin</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
          <input
            type="password"
            className="input"
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            placeholder="Password"
          />
          <div align="center">
            <button type="submit" className="button" onClick={loginDelay}>
              {loggedin && <Spinner animation="border" loading={loggedin} style={{marginRight:'10px'}}/>}
              {loggedin && "Logging In"}
              {!loggedin && <span>Login</span>}
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
