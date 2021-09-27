import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import styles from "./InfoComponent.module.css";
import parse from 'html-react-parser';

const InfoDetailComponent = () => {
  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [infodetail, setInfoDetail] = useState([]);
  const { id } = useParams();
  const fetchItems = async () => {
    const response = await axios.get(`http://localhost:3001/info/?id=${id}`);
    setInfoDetail(response.data);
  };
  return (
    <div>
      <div className={styles.headerjudul}>
        {infodetail.map((detail) => (
          <div>
            <h5 style={{fontWeight:'400'}}>Informasi</h5>
            <h2 key={detail.id}>{detail.judul}</h2>
            <hr />
            <p className={styles.textdeskripsi}>{parse(`${detail.deskripsi}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDetailComponent;
