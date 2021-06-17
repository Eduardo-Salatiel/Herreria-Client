import { Fragment, useState } from "react";
import { SpinnerCircular } from "spinners-react";
//-------------------------------------------------------------------------
import "./style.scss";

interface Props {
  urlImage: string;
  alt: string;
  styles?: Object;
}

const FadeInImage = ({ urlImage, alt, styles }: Props) => {
  const [opacity, setOpacity] = useState(0);

  const handleLoadedImage = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 4000);
  };

  return (
    <Fragment>
      {opacity === 0 && (
        <div className="loader-container">
          <SpinnerCircular color="#3b5598" size={55} thickness={140} />
        </div>
      )}
      <img
        className="fade-in-image"
        src={urlImage}
        alt={alt}
        style={{ ...styles, opacity }}
        onLoad={handleLoadedImage}
      />
    </Fragment>
  );
};

export default FadeInImage;
