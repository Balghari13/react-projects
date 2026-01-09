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
import ToggleDarkMode from "./components/08.dark-mode/ToggleDarkMode";
import ScrollIndicatorPage from "./components/09.scroll indicator/ScrollIndicatorPage";
import Tabs from "./components/10.tabs/Tabs";
import TabTests from "./components/10.tabs/TabTests";
import Modeltext from "./components/11.model/Modeltext";
import GithubProfileDetails from "./components/12.Github-profile/GithubProfileDetails";


function App() {
  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating/> */}
      {/* <ImgSlider /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
    {/* <QRcodeComponent/> */}
    {/* <ToggleDarkMode/> */}
    {/* <ScrollIndicatorPage url={"https://dummyjson.com/products?limit=100"}/> */}
    {/* <TabTests/> */}
    {/* <Modeltext/> */}
    <GithubProfileDetails/>
    </>
  );
}

export default App;
