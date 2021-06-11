import { Fragment } from 'react'
import HeaderImage from './../../../../assets/img/header-banner.jpeg';
import './style.scss';

const HeaderBanner = () => {
    return (
       <Fragment>
           <img className="header-banner" src={HeaderImage} alt="herreria colonial" />
       </Fragment>
    )
}

export default HeaderBanner;
