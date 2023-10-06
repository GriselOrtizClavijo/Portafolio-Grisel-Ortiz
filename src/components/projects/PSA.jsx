import { Link } from "react-router-dom"
import "../styles/StylesHomeProjects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ButtonWithModal from "./ButtonWithModal"
import js from "../img/logo3.png"
import nodejs from "../img/nodejs.png"
import reactlogo from "../img/react.png"
import java from "../img/java.png"
import mysql from "../img/mysql.png"
import springboot from "../img/springboot.png"
import sql from "../img/sql.png"
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const PSA = () => {

  const handleLogoClick = (logoType) => {
    switch (logoType) {
      case "web":
        window.open("http://planazo.s3-website.us-east-2.amazonaws.com/", "_blank");
        break;
      case "github":
        window.open("https://github.com/GriselOrtizClavijo/Planazo_ProyectoFinal", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-project">
    <div  className="items-center fixed top-0 left-0 p-10 w-full justify-center w-screen text-black ">
      <h2 className="text-justify text-5xl pl-20">Proyectos</h2>
    </div>

    <div className="section-project flex-col w-3/4 justify-center"> 
      <section className="img-project ">
        <img src="{planazo1}" alt="psa1"/>
        <img src="{planazo2}" alt="psa2"/>
        <img src="{planazo3}" alt="psa3"/>
        <img src="{planazo4}" alt="psa4"/>
        <img src="{planazo5}" alt="psa5"/>
      </section>

      <section className="flex">
        <div className="pr-20">
          <ButtonWithModal 
            buttonText="Descripción"
            modalContent= {
              <div>
                <p>
                Rol Principal: Backend
                <br/>
                <br/>
                Proyecto realizado en equipo.
                <br/>
                <br/>
                Este proyecto consiste en una aplicación capaz de realizar las operaciones
                básicas de creación, lectura, actualización y eliminación (CRUD) de reservas,
                productos, usuarios, categorías, y ciudades. La aplicación está compuesta 
                por una API RESTful implementada con Spring Boot y una interfaz de usuario 
                (UI) implementada con la biblioteca de JavaScript React y Typescript.
                <br/>
                <br/>
                La API RESTful de Spring Boot proporciona los endpoints necesarios para interactuar
                con los datos y la interfaz de usuario implementada con React, ofreciendo una experiencia 
                intuitiva y amigable para que los usuarios puedan interactuar con la aplicación de 
                manera fácil y eficiente
                </p>
              </div>
            }
          />
        </div>
        <div className="pr-20">
          <ButtonWithModal
            buttonText="Tecnologías utilizadas"
            modalContent={
              <div className="icons-projects justify-center pt-0">
                <img src={js} alt="" className="icons" />
                <img src={java} alt="" className="icons" />
                <img src={nodejs} alt="" className="icons" />
                <img src={reactlogo} alt="" className="icons" />
                <img src={mysql} alt="" className="icons" />
                <img src={springboot} alt="" className="icons" />
                <img src={sql} alt="" className="icons" />
              </div>
            }
          />
        </div>
        <div className="pr-20">
          <ButtonWithModal
            buttonText = "Enlaces"
            modalContent={
              <div className="icons-link">
              <a href="#" onClick={() => handleLogoClick("web")}>
                <FontAwesomeIcon className="icons" icon={faGlobe} style={{ color: "#1f3b51" }} />
              </a>
              <a href="#" onClick={() => handleLogoClick("github")}>
                <FontAwesomeIcon className="icons" icon={faGithub} style={{ color: "#1f3b51" }} />
              </a>
            </div>
            }
          />
        </div>
      </section>

    </div>
            
    <div className='project-list-container'>
        <Link to="/projects/planazo" className='text-shadow'>Planazo</Link>
        <Link to="/projects/teofonita" className='text-shadow'>Teofonita</Link>
        <Link to="/projects/psa" className='text-shadow'>PSA</Link>
        <Link to="/projects/yuliethcardozo" className='text-shadow'>Yulieth Cardozo</Link>
        <Link to="/projects/inventory" className='text-shadow'>Inventario</Link>   
    </div>
  </div>

  )
}

export default PSA