import React, { useEffect } from "react";
import Mycard from "./Mycard";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "../assets/styles/Imagecarousel.css";
import good4me1 from "../assets/imgs/good4me1.png";
import good4me2 from "../assets/imgs/good4me2.png";
import good4me3 from "../assets/imgs/good4me3.png";
import good4me4 from "../assets/imgs/good4me4.png";
import good4me5 from "../assets/imgs/good4me5.png";
import good4me6 from "../assets/imgs/good4me6.png";

const Imagecarousel = () => {
  let box;

  useEffect(() => {
    box = document.querySelector(".product-container");

    return () => {};
  }, []);

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <Box className="product-carousel">
      <IconButton className="pre-btn" onClick={btnpressprev}>
        <ChevronLeft />
      </IconButton>
      <IconButton className="next-btn" onClick={btnpressnext}>
        <ChevronRight />
      </IconButton>
      <Box className="product-container">
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me2} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me4} />
        <Mycard imageSrc={good4me5} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me5} />
        <Mycard imageSrc={good4me4} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me2} />
      </Box>
    </Box>
  );
};

export default Imagecarousel;
