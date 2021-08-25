import { atom } from "recoil";

interface atomState {
  showModal: boolean,
  component: JSX.Element | undefined
}

export const visibleModal = atom<atomState>({
  key: "visibleModal",
  default: {
    showModal: false,
    component: undefined
  }
});
