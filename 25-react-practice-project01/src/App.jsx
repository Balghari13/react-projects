import { useState } from "react";

import "./App.css";
import Accordion from "./components/01.Accordion/Accordion";
import { StarRating } from "./components/03.star-rating/StarRating";
import RandomColorGenerator from "./components/02.Random-color/RandomColorGenerator";
import { ImgSlider } from "./components/04.Img-slider/ImgSlider";
import LoadMoreData from "./components/05.Load-more-data/LoadMoreData";
import TreeView from "./components/06.treeview/TreeView";
import menus from "./components/06.treeview/data";
import QRcode from "./components/07. qr code/QRcode";
import QRcodeComponent from "./components/07. qr code/QRcode";


function App() {
  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating/> */}
      {/* <ImgSlider /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
    <QRcodeComponent/>
    </>
  );
}

export default App;
