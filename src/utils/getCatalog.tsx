import axios from "axios";
import { CategoryImagesResponse } from "../interfaces/categoryImagesResponse";

export const getCategoriesImages = async (category: string) => {
  try {
    const response = await axios.get<CategoryImagesResponse>(
      `${process.env.REACT_APP_API_URL}/get-category-images`,
      {
          params: {category}
      }
    );

    return response.data.images;
  } catch (error) {
      console.log(error);
  }
};
