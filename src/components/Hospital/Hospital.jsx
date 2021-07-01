import React, { Component } from "react";
import "./Hospital.css";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-bs/css/dataTables.bootstrap.css";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  async getHospitalData() {
    const res = await axios.get(`/api/id/covid19/hospitals`);
    this.setState({ loading: false, data: res.data });
  }

  componentDidMount() {

    this.getHospitalData().then(() => this.sync());
    
  }
  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.data,
      columns: [
        { title: "Nama", data: "name" },
        { title: "Alamat", data: "address" },
        { title: "Kota", data: "region" },
        { title: "Hotline", data: "phone" },
        { title: "Provinsi", data: "province" },
      ],
    });
  }

  componentWillUnmount() {
    
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="hero-hospital">
        <h3 style={{ marginBottom: "40px" }}>Rumah Sakit Rujukan COVID-19</h3>
        {loading ? (
          <PulseLoader Loading={loading} color={"#00b7ff;"} size={20}/>
        ) : (
          <table
            className="tablehospital"
            width="100%"
            ref={(el) => (this.el = el)}
          >
          </table>
        )}

        <div className="margin" style={{ marginTop: "8rem" }}></div>
      </div>
    );
  }
}
