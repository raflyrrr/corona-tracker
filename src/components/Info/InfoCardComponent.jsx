import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./InfoComponent.module.css";
import parse from 'html-react-parser';
import "../../main.css";
import { Link } from "react-router-dom";

const InfoCardComponent = ({ info }) => {
  return (
    <div>
      <Row className={styles.rowstyle}>
        {info.map((infodata, id) => {
          return (
            <Col lg={6} md={6} sm={6} xs={12} key={id}>
              <Card
                style={{
                  height: "16rem",
                  marginBottom: "20px",
                  boxShadow: "2px 4px 8px #9E9E9E",
                  position: "sticky",
                }}
                className={styles.InfoCardComponent}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    <Link
                      to={`/info/${infodata.id}`}
                      className="stretched-link"
                    >
                      {infodata.judul}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                   {parse(`${infodata.deskripsi.length > 250
                      ? `${infodata.deskripsi.substring(0, 250)} [...]`
                      : infodata.deskripsi}`)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default InfoCardComponent;
