import React from "react";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import "../style/carousel.css";

export const CarouseL = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="container">
      <Carousel
        withIndicators
        height={400}
        slideSize="20%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        dragFree
        align="start"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/ab36d712-71ff-4ad9-896e-6ebb29ee892b/b742f0adec1fc08c6860e238bcd7acdb.jpg"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>

        <Carousel.Slide className="card">
          <img
            className="image"
            alt="Hairtai shuu"
            src="https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/398683208b86e70e1ea1792f0b2d38e1.png"
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
