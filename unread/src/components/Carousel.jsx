import style from "../style/carousel.module.css";
import { Carousel } from "@mantine/carousel";
import { Card } from "./Card";
import { Container } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";

export const CarouseL = () => {
  const { post } = useContext(DataContext);

  return (
    <div className={style.carouselContainer}>
      <Container>
        <div className={style.div}>
          <Carousel slideSize="20px" align="start" slideGap="md">
            {post &&
              post.map((item, index) => {
                return (
                  <Carousel.Slide style={{ padding: "15px" }} key={index}>
                    <Card {...item} index={index} />
                  </Carousel.Slide>
                );
              })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};
