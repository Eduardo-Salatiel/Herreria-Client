import Carousel from "../commons/Carousel";
import SectionTitle from "../commons/SectionTitle";
import { carouselData } from "../../data/carouselData";
import './style.scss';

const OtherWorks = () => {
  return (
    <section className="other-works">
      <SectionTitle title="Otros proyectos" />
      <Carousel loading={false} itemWidth={300}>
        {carouselData.map((carousel, index) => (
          <div className="slick" key={index}>
            <img src={carousel.src} alt="herreria artesanal" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OtherWorks;
