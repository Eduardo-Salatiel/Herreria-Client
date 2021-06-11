import { SpinnerCircular } from "spinners-react";
import { useCarousel } from "./../../../hooks/useCarousel";
import "./style.scss";

interface Props {
  children: JSX.Element[];
  itemWidth?: number;
  loading: boolean;
}

const Carousel = ({ children, itemWidth = 300, loading }: Props) => {
  const itemSize = itemWidth + 5;
  const {
    handleNextClick,
    handlePrevClick,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    trackRef,
  } = useCarousel(itemSize);

  return (
    <div className="carousel">
      {loading ? (
        <SpinnerCircular
          size={100}
          style={{ margin: "0 30px" }}
          color="#ef4036"
        />
      ) : (
        <div className="carousel-slick-list">
          <div
            className="carousel-slick-list-btn prev"
            onClick={handlePrevClick}
          />
          <div
            className="carousel-slick-list-track"
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={trackRef}
          >
            {children}
          </div>
          <div
            className="carousel-slick-list-btn next"
            onClick={handleNextClick}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
