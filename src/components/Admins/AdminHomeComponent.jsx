import React, { useState } from "react";
import styles from "./AdminDataComponent.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  ListGroup,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const AdminHomeComponent = () => {

const history = useHistory()

  const [username] = useState("");
  const [password] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push('/admin')
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbarinfo}>
        <Navbar.Brand href="/adminhome">Covices Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Hi, Admin" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className={styles.rowstyle}>
        <Col lg={2} className={styles.listgroups}>
          <ListGroup>
            <Link to="admindatainfo" style={{ textDecoration: "none" }}>
              <ListGroup.Item action>Data Informasi</ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col>
          <h3 className="mt-3">Selamat datang, Admin</h3>
        </Col>
      </Row>
    </>
  );
};

export default AdminHomeComponent;
