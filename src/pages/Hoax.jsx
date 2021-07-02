import React, { useState, useEffect } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { Navbar, Header, Footer, HoaxCards, Pagination } from "../components";
import { Container } from "react-bootstrap";
import styles from "../App.module.css";
import "../main.css";

const Hoax = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(12);

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get('https://cors.bridged.c/https://dekontaminasi.com/api/id/covid19/hoaxes');
      setInfo(res.data);
      setIsLoading(false);
    };
    fetchInfo();
  }, []);

  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentInfo = info.slice(indexOfFirstInfo, indexOfLastInfo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={styles.container}>
      <Navbar />
      <Header text="Hoax Buster Tentang COVID-19" />
      <Container>
        {isLoading ? <PulseLoader loading = {isLoading} color="#00b7ff;" /> : <HoaxCards info={currentInfo} />}
        <Pagination
          infoPerPage={infoPerPage}
          totalInfo={info.length}
          paginate={paginate}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Hoax;
