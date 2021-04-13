import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Header, Footer } from "../components";
import { Card, Col, Row, Container } from "react-bootstrap";
import styles from "../App.module.css";
import "../main.css";

function Hoax() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://dekontaminasi.com/api/id/covid19/hoaxes")
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(info);

  return (
    <div className={styles.container}>
      <Navbar />
      <Header text="Hoax Buster Tentang COVID-19" />
      <Container>
        <div className={styles.hotline}>
          <Row>
            {info.map((hoax) => {
              return (
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Card
                    style={{
                      height: "180px",
                      marginBottom: "20px",
                      boxShadow: "2px 4px 8px #9E9E9E",
                      
                    }}
                    className={styles.hoaxcards}
                  >
                    <Card.Body>
                      <Card.Text>
                        {hoax.title}
                        <a href={hoax.url} class="stretched-link"></a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default Hoax;
