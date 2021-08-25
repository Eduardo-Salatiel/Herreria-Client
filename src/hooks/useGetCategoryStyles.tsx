export type categories = "puertas" | "zaguanes" | "ventanas" | "barandales";
export interface CategoryStyle {
  maxWidth: string,
  width: string,
  minWidth: string,
  height: string,
}

export const useGetCategoryStyles = (catalog: categories) => {
  const categoryStyles =( ():CategoryStyle => {
    switch (catalog) {
      case "puertas":
        return {
          maxWidth: "300px",
          width: "300px",
          minWidth: "300px",
          height: "400px",
        };
      case "ventanas":
        return {
          maxWidth: "300px",
          width: "300px",
          minWidth: "300px",
          height: "400px",
        };
      case "zaguanes":
        return {
          maxWidth: "350px",
          width: "330px",
          minWidth: "330px",
          height: "250px",
        };
      case "barandales":
        return {
          maxWidth: "350px",
          width: "330px",
          minWidth: "330px",
          height: "250px",
        };

      default:
        return {
          maxWidth: "350px",
          width: "300px",
          minWidth: "300px",
          height: "400px",
        };
    }
  })();

  return { categoryStyles };
};
