import React, { Component } from "react";
import "./IndoData.css";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-bs/css/dataTables.bootstrap.css";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class IndoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  async getIndoInfo() {
    const res = await axios.get(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more"
    );
    this.setState({ loading: false, data: res.data});
  }

  componentDidMount() {
    this.getIndoInfo().then(() => this.sync());
  }
  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.data,
      columns: [
        { title: "Provinsi", data: "provinsi", },
        { title: "Jumlah Kasus", data: "kasus",render: $.fn.dataTable.render.number( ',' ) },
        { title: "Jumlah Dirawat", data: "dirawat",render: $.fn.dataTable.render.number( ',' ) },
        { title: "Jumlah Sembuh", data: "sembuh",render: $.fn.dataTable.render.number( ',' ) },
        { title: "Meninggal", data: "meninggal",render: $.fn.dataTable.render.number( ',' ) },
        { title: "Jenis Kelamin (L)", data: "jenis_kelamin.laki-laki",render: $.fn.dataTable.render.number( ',' ) },
        { title: "Jenis Kelamin (P)", data: "jenis_kelamin.perempuan",render: $.fn.dataTable.render.number( ',' ) },
      ],
    });
  }

  componentWillUnmount() {
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="hero-indodata">
        <h3 style={{ marginBottom: "40px" }}>Data Kasus COVID-19 di Indonesia Berdasarkan Provinsi</h3>
        {loading ? (
          <PulseLoader Loading={loading} color={"#00b7ff;"} size={20} />
        ) : (
          <table
            className="tableindodata"
            width="90%"
            ref={(el) => (this.el = el)}
          ></table>
        )}

        <div className="margin" style={{ marginTop: "8rem" }}></div>
      </div>
    );
  }
}
