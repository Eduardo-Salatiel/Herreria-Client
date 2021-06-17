import { carouselData } from "../../data/carouselData";
import FadeInImage from "../commons/FadeInImage";
import "./style.scss";

interface Props {
  catalog: string;
}

const Galery = ({ catalog }: Props) => {
  return (
    <div className="galery">
      {carouselData.map((carousel, index) => (
        <div className="galery-item">
          <FadeInImage
            urlImage={carousel.src}
            alt={`herreria ${catalog}`}
            styles={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Galery;
