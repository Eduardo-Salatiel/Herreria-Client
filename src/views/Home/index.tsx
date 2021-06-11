import { Fragment } from "react";
import Header from "../../components/Layout/Header";
import Slider from "../../components/commons/Slider";
import Presentation from "../../components/Presentation";
import Strengths from "../../components/Strengths";
import OtherWorks from "../../components/OtherWorks";
import { lastWorksSlide } from "../../data/lastWorksData";
import Footer from "../../components/Layout/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Presentation />
        <Strengths />
        <Slider slideArr={lastWorksSlide} />
        <OtherWorks />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
