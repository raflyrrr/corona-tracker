import React,{useState,useEffect} from "react";
import { Navbar, Header, Footer, InfoComponent } from "../components";
import { PulseLoader } from "react-spinners";
import { Container } from "react-bootstrap";
import styles from "../App.module.css";
import "../main.css";

const Info = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [footerLoading,setFooterLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
      setIsLoading(false);
    }, 500);
    }
    if (footerLoading) {
      setTimeout(() => {
      setFooterLoading(false);
    }, 1000);
    }
  },[isLoading,footerLoading])

  return (
    <div className={styles.container}>
      <Navbar classInfo="nav-active" />
      <Header text="Informasi Tentang COVID-19" />
      <h5 className={styles.call}>
      Informasi terkini mengenai COVID-19 dari sumber-sumber terpercaya.
      </h5>
      <Container>
      {isLoading ? <PulseLoader loading = {isLoading} color="#00b7ff" /> : <InfoComponent />}
      </Container>
      {footerLoading ? <PulseLoader loading = {footerLoading} color="#fff;" /> : <Footer />}
    </div>
  );
};

export default Info;
