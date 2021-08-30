import { Fragment } from 'react';
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/commons/SectionTitle";
//-----------------------------------------------------------------------
import Header from "../../components/Layout/Header";
import Galery from "../../components/Galery/";
import Footer from "../../components/Layout/Footer";
import "./style.scss";
import { categories } from "../../hooks/useGetCategoryStyles";

interface Params {
  catalog: categories;
}

const Catalog = () => {
  const { catalog } = useParams<Params>();

  return (
    <Fragment>
      <Header stickyHeader={false} />
      <div className="catalog-container">
        <SectionTitle title={`${catalog}`} />
        <p className="catalog-instruction">Para ver a detalle, seleccione una imagen</p>
        <Galery catalog={catalog} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Catalog;
