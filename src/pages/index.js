import React from "react";
import {AoxAnimation} from "../animation/aoxAnimation";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

const LandingPage = () => {
  AoxAnimation();
  return (
    <React.Fragment>
      <Navbar />
      <h1>Welcome to boltswitch</h1>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
