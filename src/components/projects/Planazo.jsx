import { Link } from "react-router-dom"
import "../styles/StylesHomeProjects.css"
import js from "../img/logo3.png"
import nodejs from "../img/nodejs.png"
import reactlogo from "../img/react.png"
import java from "../img/java.png"
import mysql from "../img/mysql.png"
import springboot from "../img/springboot.png"
import sql from "../img/sql.png"


const Planazo = () => {

  return (

    <div className="flex flex-col justify-center pt-20">
          <div>
            <h2 className="text-justify text-5xl pl-20">Proyectos</h2>
          </div>

      <div className="section-project flex flex-col w-3/4 justify-center"> 
        <section className="img-project">
          <img src="" alt="img1" />
          <img src="" alt="img2" />
          <img src="" alt="img3" />
          <img src="" alt="img4" />
        </section>
        <section >
          <p className="items-center pt-10 text-2xl  font-extrabold">
            Rol Principal: Backend
          </p>
          <br/>
          <p>
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
         
        </section>
        <h2 className=" items-center pt-10 text-2xl text-gray-500 font-extrabold">Tecnologías utilizadas</h2>
        <section>
              <div className="icons-projects">
                <img src={js} alt="" className="icons" />
                <img src={nodejs} alt="" className="icons" />
                <img src={reactlogo} alt="" className="icons" />
                <img src={java} alt="" className="icons" />
                <img src={mysql} alt="" className="icons" />
                <img src={springboot} alt="" className="icons" />
                <img src={sql} alt="" className="icons" />
              </div>
        </section>
        <section>
          <Link to="http://planazo.s3-website.us-east-2.amazonaws.com/">Página Web</Link>
          <Link to="https://github.com/GriselOrtizClavijo/Planazo_ProyectoFinal">Github</Link>
        </section>
        <div className='project-list-container'>
            <Link to="/projects/planazo" className='text-shadow'>Planazo</Link>
            <Link to="/projects/teofonita" className='text-shadow'>Teofonita</Link>
            <Link to="/projects/psa" className='text-shadow'>PSA</Link>
            <Link to="/projects/yuliethcardozo" className='text-shadow'>Yulieth Cardozo</Link>
            <Link to="/projects/inventory" className='text-shadow'>Inventario</Link>   
          </div>
      </div>
     
    </div>

  )
}

export default Planazo