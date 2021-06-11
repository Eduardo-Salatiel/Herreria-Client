import AboutItem from "../commons/AboutItem";
import SectionTitle from "../commons/SectionTitle";
import PresentationGalery from "./PresentationGalery";
import "./style.scss";

const Presentation = () => {
  return (
    <section className="presentation">
      <SectionTitle title="El acero es duradero" />
      <div className="presentation-information-container">
        <div className="presentation-about">
          <AboutItem
            title="¿Quiénes somos?"
            content="Somos una empresa dedicada a la herrería colonial con mas de 20 años de experiencia en el mercado. Nuestras especialidades son la forja y el detallado de pintura estilo madera."
          />
          <AboutItem
            title="Trabajos echos a tu medida"
            content="Si lo puedes imaginar lo podemos forjar, con la calidad de trabajo que mereces. Tu satisfacción es nuestra misión."
          />
        </div>
        <PresentationGalery />
      </div>
    </section>
  );
};


export default Presentation;