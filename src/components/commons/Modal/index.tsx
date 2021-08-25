import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { visibleModal } from "../../../recoil/ModalState/atoms";
//------------------------------------------------------------------------
import "./style.scss";

const Modal = () => {
  const { component: Component } = useRecoilValue(visibleModal);
  const resetModalState = useResetRecoilState(visibleModal);

  const handleCloseModalClick = (e: any) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("fa-times-circle")
    ) {
      return resetModalState();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "18px";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal" onClick={handleCloseModalClick}>
      <div className="modal-content">
        <i className="far fa-times-circle" onClick={handleCloseModalClick}></i>
        {Component}
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
};

export default Modal;
