import Carousel from "../commons/Carousel";
import SectionTitle from "../commons/SectionTitle";
import { carouselData } from "../../data/carouselData";
import './style.scss';
import FadeInImage from "../commons/FadeInImage";

const OtherWorks = () => {
  return (
    <section className="other-works">
      <SectionTitle title="Otros proyectos" />
      <Carousel loading={false} itemWidth={300}>
        {carouselData.map((carousel, index) => (
          <div className="slick" key={index}>
            <FadeInImage urlImage={carousel.src} alt="herreria artesanal forja-smc"/>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OtherWorks;
