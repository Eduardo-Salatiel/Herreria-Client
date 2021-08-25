import { carouselData } from "../../data/carouselData";
import { useSetRecoilState, useRecoilValue } from "recoil";
//-------------------------------------------------------------------------
import FadeInImage from "../commons/FadeInImage";
import { visibleModal } from "../../recoil/ModalState/atoms";
import "./style.scss";
import ImageMagnifierModal from "../CustomModals/ImageMagnifierModal/index";
import {
  categories,
  useGetCategoryStyles,
} from "../../hooks/useGetCategoryStyles";
import { useEffect } from "react";
import { getCategoriesImages } from "../../utils/getCatalog";
import { galeryImages } from "../../recoil/galeryImages/atom";
import { SpinnerCircular } from "spinners-react";

interface Props {
  catalog: categories;
}

const Galery = ({ catalog }: Props) => {
  const setModalParams = useSetRecoilState(visibleModal);
  const setCategoryImages = useSetRecoilState(galeryImages);
  const { galery } = useRecoilValue(galeryImages);
  const { categoryStyles } = useGetCategoryStyles(catalog);

  useEffect(() => {
    getCategoriesImages(catalog).then((res) =>
      setCategoryImages({ galery: res })
    );
  }, [catalog]);

  const handleOpenModalClick = (imageUrl: string) => {
    setModalParams({
      showModal: true,
      component: (
        <ImageMagnifierModal
          imageUrl={imageUrl}
          magniferDimensions={categoryStyles}
        />
      ),
    });
  };

  return (
    <div className="galery">
      {!galery?.length ? (
        <div className="galery-loader">
          <SpinnerCircular color="#3b5598" size={100} thickness={140} />
        </div>
      ) : (
        galery!.map((image) => (
          <div
            key={image.uid}
            className="galery-item"
            onClick={() => handleOpenModalClick(image.imageUrl)}
            style={{ ...categoryStyles }}
          >
            <FadeInImage
              urlImage={image.imageUrl}
              alt={`herreria ${catalog}`}
              styles={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Galery;
