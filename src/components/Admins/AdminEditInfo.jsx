import React from "react";
import axios from "axios";
import {
  ListGroup,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";
import styles from "./AdminDataComponent.module.css";

class AdminEditInfo extends React.Component {
  state = {
    judul: "",
    deskripsi: "",
  };

  pushToDataInfo = (param) => {
    this.props.history.push({
      pathname: `/admindatainfo`,
      state: param,
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3001/info/${id}`).then((res) => {
      const editinfo = res.data;
      this.setState({
        judul: editinfo.judul,
        deskripsi: editinfo.deskripsi,
      });
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeCkEditor = (event, editor) => {
    const data = editor.getData();
    this.setState({
      deskripsi: data,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const updateinfo = {
      judul: this.state.judul,
      deskripsi: this.state.deskripsi,
    };
    axios.put(`http://localhost:3001/info/${id}`, updateinfo).then((res) => {
      if (res.statusText === "OK") {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Mengupdate Data Informasi",
          showConfirmButton: false,
          timer: 2000,
        });
        this.pushToDataInfo();
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Mengupdate Data Informasi",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className={styles.navbarinfo}>
          <Navbar.Brand href="/adminhome">Covices Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Hi, Admin" id="basic-nav-dropdown">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row className={styles.rowstyle}>
          <Col lg={2} className={styles.listgroups}>
            <ListGroup>
              <Link to="/admindatainfo" style={{ textDecoration: "none" }}>
                <ListGroup.Item action className={styles.columninfo}>
                  Data Informasi
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Col>
          <Col className={styles.tablestyle}>
            <h3>Edit Data Informasi</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>Judul</Form.Label>
                <Form.Control
                  type="text"
                  name="judul"
                  onChange={this.handleChange}
                  value={this.state.judul}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>Deskripsi</Form.Label>
                <CKEditor
                  data={this.state.deskripsi}
                  editor={ClassicEditor}
                  onReady={(editor) => {}}
                  onChange={this.handleChangeCkEditor}
                />
              </Form.Group>
              <Link to="/admindatainfo" type="button">
                <Button
                  style={{ marginBottom: "10px" }}
                  variant="outline-flat"
                  type="submit"
                  className={styles.buttonback}
                >
                  Kembali
                </Button>
              </Link>
              <Button
                variant="flat"
                type="submit"
                className={styles.button}
                style={{ marginBottom: "10px" }}
              >
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(AdminEditInfo);
