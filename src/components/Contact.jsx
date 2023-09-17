
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileRetro, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import{ faWhatsapp } from '@fortawesome/free-brands-svg-icons'


library.add(faMobileRetro, faEnvelope, faLinkedinIn, faWhatsapp);

const Contact = () => {

  const [copied, setCopied] = useState(false);
  const phoneNumber = '+34642492842'; 

  const handlePhoneNumberClick = () => {
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  };

  const handleLogoClick = (logoType) => {
    switch (logoType) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/griselortizclavijo", "_blank");
        break;
      case "telefono":
        window.open("tel:+34642492842");
        break;
      case "whatsapp":
        window.open("https://api.whatsapp.com/send?phone=34642492842");
        break;
      case "correo":
        window.open("mailto:grisoc930@gmail.com");
        break;
      default:
        break;
    }
  };
  

  return (
    <div className="items-center fixed top-0 left-0 p-10 w-full justify-center text-black ">
       <h2 className="text-5xl pl-20">Contacto</h2>
      <div className="flex  md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="icons-contact">
        <FontAwesomeIcon
        className="icons"
        icon={faMobileRetro}
        style={{ color: "#1f3b51", cursor: 'pointer' }}
        onClick={handlePhoneNumberClick} 
        />
          {copied ? (
            <span className="textIcons">Número copiado</span>
          ) : null}
          <a
            href={`tel:${phoneNumber}`}
            className="textIcons"
            style={{ cursor: 'pointer', display: copied ? 'none' : 'inline' }}
          >
          </a>
        </div>
        <div className="icons-contact">
        <a href="#" onClick={() => handleLogoClick("correo")}>
          <FontAwesomeIcon className="icons" icon={faEnvelope} style={{ color: "#1f3b51" }} />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="icons-contact">
          <a href="#" onClick={() => handleLogoClick("linkedin")}>
          <FontAwesomeIcon className="icons" icon={faLinkedinIn} style={{ color: "#1f3b51" }} />
          </a>
        </div>
        <div className="icons-contact">
          <a href="#" onClick={() => handleLogoClick("whatsapp")}>
          <FontAwesomeIcon className="icons" icon={faWhatsapp} style={{ color: "#1f3b51" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact