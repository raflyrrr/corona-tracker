import React from "react";
import { Navbar, Header, Footer } from "../components";
import styles from "../App.module.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../main.css";

const Hotline = () => {
  const hotlineCardData = [
    {
      image: "/assets/images/logo-kemenkes1.png",
      title: "021-5210-411",
      text: "Kementrian Kesehatan",
    },
    {
      image: "/assets/images/logo-kemenkes1.png",
      title: "0812-1212-3119",
      text: "Kementrian Kesehatan",
    },
    {
      image: "/assets/images/logo-jkt.png",
      title: "112",
      text: "Pemprov DKI Jakarta",
    },
    {
      image: "/assets/images/logo-jkt.png",
      title: "0813-8837-6855",
      text: "Pemprov DKI Jakarta",
    },
    {
      image: "/assets/images/logo-jabar.png",
      title: "119",
      text: "Jawa Barat",
    },
    {
      image: "/assets/images/logo-jabar.png",
      title: "024-358-0713",
      text: "Jawa Barat",
    },
    {
      image: "/assets/images/logo-jogja.png",
      title: "021-5210-411",
      text: "Pemprov D.I Yogyakarta",
    },
    {
      image: "/assets/images/logo-jogja.png",
      title: "021-5210-411",
      text: "Pemprov D.I Yogyakarta",
    },
    {
      image: "/assets/images/logo-jatim.png",
      title: "031-843-0313",
      text: "Jawa Timur",
    },
    {
      image: "/assets/images/logo-jatim.png",
      title: "0813-3436-7800",
      text: "Jawa Timur",
    },
    {
      image: "/assets/images/logo-jateng.png",
      title: "024-358-0713",
      text: "Jawa Tengah",
    },
    {
      image: "/assets/images/logo-jateng.png",
      title: "0823-1360-0560",
      text: "Jawa Tengah",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Col lg={3} md={6} sm={6} xs={12}>
        <div className={styles.container}>
        <Card
          key={index}
          style={{
            width:"14rem",
            boxShadow: "2px 4px 8px #9E9E9E",
            margin: "10px",
            marginBottom: "20px",
            height:"10rem",
          }}
        >
          <Card.Img variant="top" src={card.image} style={{padding:"5px 86px 0px"}} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center",marginBottom:"2px",marginTop:"-8px" }}>
              {card.title}
            </Card.Title>
            <Card.Text style={{ textAlign: "center",fontSize:"14px" }}>{card.text}</Card.Text>
          </Card.Body>
        </Card>
        </div>
      </Col>
    );
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <Header text="Hotline Coronavirus di Indonesia" />
      <h5 className={styles.call}>
        Layanan darurat via telepon yang disediakan oleh Kemenkes dan juga
        Pemprov DKI Jakarta
      </h5>
      <Container>
        <div className={styles.hotline}>
          <Row>{hotlineCardData.map(renderCard)}</Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Hotline;
