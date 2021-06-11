import img1 from "./../../../assets/img/presentation1.jpeg";
import img2 from "./../../../assets/img/presentation2.jpeg";
import img3 from "./../../../assets/img/presentation3.jpeg";
import "./style.scss";

export const PresentationGalery = () => {
  return (
    <div className="presentation-galery">
      <div className="__item-1">
        <img src={img1} alt="herreria colonial" />
      </div>
      <div className="__item-2">
        <img src={img2} alt="herreria colonial" />
      </div>
      <div className="__item-3">
        <img src={img3} alt="herreria colonial" />
      </div>
    </div>
  );
};

export default PresentationGalery;
