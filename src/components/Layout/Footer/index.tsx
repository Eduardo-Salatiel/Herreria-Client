import { contactData } from "../../../data/contactData";
import ContactDetail from "../../commons/ContactDetail";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-title">Contacto</span>
      {contactData.map((contactItem, index) => (
        <ContactDetail
          key={index}
          icon={contactItem.icon}
          textContent={contactItem.textContent}
          url={contactItem.url}
        />
      ))}
    </footer>
  );
};

export default Footer;
