import { useEffect, useState } from "react";
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
  GlassMagnifier,
} from "react-image-magnifiers";
//----------------------------------------------------------------------------
import { CategoryStyle } from "../../../hooks/useGetCategoryStyles";
import "./style.scss";

interface Props {
  imageUrl: string;
  magniferDimensions: CategoryStyle;
}

const ImageMagnifierModal = ({imageUrl,magniferDimensions}: Props) => {
  const [verifyIsMobile, setVerifyIsMobile] = useState(false);

  const verifyWidthDimension = () => {
    window.innerWidth <= 766
      ? setVerifyIsMobile(true)
      : setVerifyIsMobile(false);
  };

  useEffect(() => {
    window.innerWidth <= 766 && setVerifyIsMobile(true);
    window.addEventListener("resize", verifyWidthDimension);

    return () => {
      window.removeEventListener("resize", verifyWidthDimension);
    };
  }, []);

  return (
    <div className="image-magnifier-modal">
      <h2 className="modal-title">Activa el zoom al tocar</h2>
      {verifyIsMobile ? (
        <GlassMagnifier
          className="glass-magnifier"
          imageSrc={imageUrl}
          magnifierSize={200}
          magnifierBorderSize={8}
        />
      ) : (
        <MagnifierContainer className="magnifier-container">
          <MagnifierPreview
            className="magnifier-preview"
            imageSrc={imageUrl}
            style={{ ...magniferDimensions }}
          />
          <div
            className="magnifier-zoom-placeholder"
            style={{ width: "400px", height: magniferDimensions.height }}
          />
          <MagnifierZoom
            className="magnifier-zoom"
            imageSrc={imageUrl}
            style={{ width: "400px", height: magniferDimensions.height }}
          />
        </MagnifierContainer>
      )}
    </div>
  );
};

export default ImageMagnifierModal;
