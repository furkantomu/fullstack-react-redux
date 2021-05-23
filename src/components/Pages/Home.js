import React from "react";
import Banner from "../Main/Banner";
import { MainsObj } from "../Main/MainData";

const Home = () => {
  return (
    <>
    
      <Banner {...MainsObj} />
    </>
  );
};

export default Home;
