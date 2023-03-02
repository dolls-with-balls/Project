import React from "react";
import styles from "../styles/Card.module.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Card = () => {
  return (
    <>
      <a className={styles.card}>
        <MDBCard className={styles.background}>
          <MDBCardImage src="" alt="..." position="top" />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>blabalalbalablab</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </a>
    </>
  );
};
