import { strengthsData } from "../../data/strengthsData";
import ClipPathCard from "../commons/ClipPathCard";
import "./style.scss";

const Strengths = () => {
  return (
    <section className="strengths">
      <h2 className="title">¿Por qué somos tu mejor opción?</h2>
      <p className="title-second">Toca la imagen y averígualo</p>
      <div className="strengths-cards-container">
        {strengthsData.map((strength, index) => (
          <ClipPathCard
            imageUrl={strength.src}
            title={strength.title}
            content={strength.content}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Strengths;
