import { useState } from "react";
//--------------------------------------------------------------------------
import "./style.scss";
import { lastWorks } from "../../../interfaces/lastWorks";
import SectionTitle from "../SectionTitle";

interface Props {
  slideArr: lastWorks[];
}

const Slider = ({ slideArr }: Props) => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const slideSize = slideArr.length;

  const handleNextClick = () => {
    setCurrentComponent(
      currentComponent === slideSize - 1 ? 0 : currentComponent + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentComponent(
      currentComponent === 0 ? slideSize - 1 : currentComponent - 1
    );
  };

  return (
    <div className="last-works">
      <SectionTitle title="Ultimas entregas"/>
    <section className="slider">
      <i className="fas fa-arrow-circle-left fa-2x prev" onClick={handlePrevClick}></i>
      {/* ----SLIDE ITEM---- */}
      {slideArr.map((slideItem, index) => (
        <div
          className={`${currentComponent === index ? "slide active" : "slide"}`}
          key={index}
        >
          {currentComponent === index && (
            <img className="image" src={slideItem.src} alt="herreria forja" />
          )}
        </div>
      ))}
      <i className="fas fa-arrow-circle-right fa-2x next" onClick={handleNextClick}></i>
    </section>
    </div>
  );
};

export default Slider;
