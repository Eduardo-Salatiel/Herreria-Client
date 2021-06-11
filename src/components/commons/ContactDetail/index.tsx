import { Fragment } from "react";
import "./style.scss";

interface Props {
  url?: string;
  icon: string;
  textContent: string;
}

const ContactDetail = ({ url, icon, textContent }: Props) => {
  return (
    <Fragment>
      {url ? (
        <div className="contact-detail">
          <i className={icon}></i>
          <a href={url} target="_blank" rel="noreferrer">
            {textContent}
          </a>
        </div>
      ) : (
        <div className="contact-detail">
          <i className={icon}></i>
          <span>{textContent}</span>
        </div>
      )}
    </Fragment>
  );
};

export default ContactDetail;
