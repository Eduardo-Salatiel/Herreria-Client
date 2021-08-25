import { atom } from "recoil";
import { Image } from "../../interfaces/categoryImagesResponse";

interface atomState {
  galery: Image[] | undefined;
}

export const galeryImages = atom<atomState>({
  key: "galeryImages",
  default: {
    galery: [],
  },
});
