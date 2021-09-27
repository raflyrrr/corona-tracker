import React, { useState, useEffect } from "react";
import { InfoCardComponent, Pagination } from "..";
import styles from "./InfoComponent.module.css";
import axios from "axios";

const InfoComponent = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(6);

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get("http://localhost:3001/info");
      setInfo(res.data);
    };
    fetchInfo();
  }, []);

  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentInfo = info.slice(indexOfFirstInfo, indexOfLastInfo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <InfoCardComponent info={currentInfo} />
      <div className={styles.paginationinfo}>
        <Pagination
          infoPerPage={infoPerPage}
          totalInfo={info.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default InfoComponent;
