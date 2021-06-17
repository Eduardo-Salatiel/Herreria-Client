import { Fragment } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/commons/SectionTitle";
//-----------------------------------------------------------------------
import Header from "../../components/Layout/Header";
import Galery from '../../components/Galery/';
import Footer from '../../components/Layout/Footer';
import "./style.scss";

interface Params {
  catalog: string;
}

const Catalog = () => {
  const { catalog } = useParams<Params>();

  return (
    <Fragment>
      <Header stickyHeader={false} />
      <div className="catalog-container">
        <SectionTitle title={catalog} />
        <Galery catalog={catalog}/>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Catalog;
