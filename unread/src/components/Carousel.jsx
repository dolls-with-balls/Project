import style from "../style/carousel.module.css";
import { Carousel } from "@mantine/carousel";
import { Card } from "./Card";
import { Container } from "react-bootstrap";

export const CarouseL = (props) => {
  return (
    <div className={style.carouselContainer}>
      <Container>
        <div className={style.div}>
          <Carousel slideSize="20px" align="start" slideGap="md">
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
            <Carousel.Slide style={{ padding: "15px" }}>
              <Card />
            </Carousel.Slide>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};
