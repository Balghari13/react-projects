import { useState } from "react";

import "./App.css";
import Accordion from "./components/01.Accordion/Accordion";
import { StarRating } from "./components/03.star-rating/StarRating";
import RandomColorGenerator from "./components/02.Random-color/RandomColorGenerator";
import { ImgSlider } from "./components/04.Img-slider/ImgSlider";
import LoadMoreData from "./components/05.Load-more-data/LoadMoreData";

function App() {
  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating/> */}
      {/* <ImgSlider /> */}
      <LoadMoreData/>
    </>
  );
}

export default App;
