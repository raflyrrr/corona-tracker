import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./HoaxCards.module.css";
import "../../main.css";

const HoaxCards = ({ info }) => {
  return (
    <div className={styles.hotline}>
      <Row>
        {info.map((hoax, id) => {
          return (
            <Col lg={3} md={6} sm={6} xs={12} key={id}>
              <Card
                style={{
                  height: "180px",
                  marginBottom: "20px",
                  boxShadow: "2px 4px 8px #9E9E9E",
                  position: "sticky",
                }}
                className={styles.hoaxcards}
              >
                <Card.Body>
                  <Card.Text>{hoax.title}</Card.Text>
                  <a href={hoax.url} className="stretched-link">
                    <span></span>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HoaxCards;
