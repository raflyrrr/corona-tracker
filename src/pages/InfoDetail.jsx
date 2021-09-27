import React,{useEffect,useState} from "react";
import { Footer, InfoDetailComponent, Navbar } from "../components";
import { PulseLoader } from "react-spinners";
import styles from "../App.module.css";
import { Container } from "react-bootstrap";
import "../main.css";

const InfoDetail = () => {

const [footerLoading,setFooterLoading] = useState(true)

  useEffect(() => {
    if (footerLoading) {
      setTimeout(() => {
      setFooterLoading(false);
    }, 500);
    }
  },[footerLoading])

  return (
    <div className={styles.container}>
      <Navbar classInfo="nav-active" />
      <Container>
        <InfoDetailComponent />
      </Container>
      <div className={styles.footerinfodetail}>
      {footerLoading ? <PulseLoader loading = {footerLoading} color="#fff;" /> : <Footer />}
      </div>
    </div>
  );
};

export default InfoDetail;
