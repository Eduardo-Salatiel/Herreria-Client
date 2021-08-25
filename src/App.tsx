import { Fragment } from "react";
import { useRecoilValue } from 'recoil';
import Modal from "./components/commons/Modal";
import Navigation from "./routes/Navigation";
import { visibleModal } from './recoil/ModalState/atoms';

function App() {
  const {showModal} =  useRecoilValue(visibleModal);

  return (
    <Fragment>
      <Navigation />
      {showModal ? <Modal /> : null}
    </Fragment>
  );
}

export default App;
