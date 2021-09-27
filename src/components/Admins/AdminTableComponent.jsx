import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import styles from './AdminDataComponent.module.css'
import {BiEdit} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminTableComponent = ({ info }) => {
  const deleteInfo = async (id) => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Ingin menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Tidak",
    }).then((res) => {
      if (res.isConfirmed) {
        axios.delete(`http://localhost:3001/info/${id}`);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Menghapus Data Informasi",
          showConfirmButton: false,
          timer: 3000,
        });
        setTimeout(() => window.location.reload(), 800);
      }
    });
  };
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th className={styles.thno}>No</th>
            <th>Judul</th>
            <th className={styles.thaksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {info.map((infotable, index) => (
            <tr key={infotable.id}>
              <td>{index + 1}</td>
              <td>{infotable.judul}</td>
              <td >
                <Link to={`/admindatainfo/edit/${infotable.id}`}>
                  <Button variant="flat" className={styles.button}><BiEdit className={styles.editicon}/></Button>
                </Link>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={() => deleteInfo(infotable.id)}
                >
                  <FaTrash className={styles.deleteicon}/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminTableComponent;
