import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminDataComponent.module.css";
import { CgAdd } from "react-icons/cg";
import { Link, useHistory } from "react-router-dom";
import { Pagination } from "..";
import {
  ListGroup,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import AdminTableComponent from "./AdminTableComponent";

function AdminDataComponent() {
  const [info, setInfo] = useState([]);
  const [username] = useState("");
  const [password] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(10);

  const history = useHistory();
  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentInfo = info.slice(indexOfFirstInfo, indexOfLastInfo);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const result = await axios.get("http://localhost:3001/info");
    setInfo(result.data);
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push("/admin");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbarinfo}>
        <Navbar.Brand href="/adminhome">Covices Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Hi, Admin" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className={styles.rowstyle}>
        <Col lg={2} className={styles.listgroups}>
          <ListGroup>
            <Link to="admindatainfo" style={{ textDecoration: "none" }}>
              <ListGroup.Item action className={styles.columninfo}>Data Informasi</ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col className={styles.tablestyle}>
          <Link to="/admindatainfo/adminaddinfo">
            <Button variant="flat" className={styles.button}>
              <CgAdd className={styles.addbutton} /> Tambah Data
            </Button>
          </Link>
          <h3 style={{ marginTop: "20px" }}>Data Informasi</h3>
          <AdminTableComponent info={currentInfo} />
          <div className={styles.paginationdata}>
            <Pagination
              infoPerPage={infoPerPage}
              totalInfo={info.length}
              paginate={paginate}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminDataComponent;
