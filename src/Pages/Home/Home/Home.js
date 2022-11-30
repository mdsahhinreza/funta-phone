import React from "react";
import Ads from "../Ads/Ads";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Extra from "../Extra/Extra";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Ads></Ads>
      <Extra></Extra>
    </div>
  );
};

export default Home;
