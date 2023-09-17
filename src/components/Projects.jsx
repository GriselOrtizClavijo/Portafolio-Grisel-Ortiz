
import logo from "./img/logo2.png"
// import { Link, Router } from 'react-router-dom'

import { Link } from "react-router-dom";


const Projects = () => {
  

  return (
   
      <div className="container-project">
          <div  className="items-center fixed top-0 left-0 p-10 w-full justify-center w-screen text-black ">
            <h2 className="text-justify text-5xl pl-20">Proyectos</h2>
          </div>
          <div className="flex w-3/4 justify-center items-center">
          <img src={logo} alt="miLogo" className=" logo" />
          </div>
          <div className='project-list-container'>
            <Link to="/projects/planazo" className='text-shadow'>Planazo</Link>
            <Link to="/projects/teofonita" className='text-shadow'>Teofonita</Link>
            <Link to="/projects/psa" className='text-shadow'>PSA</Link>
            <Link to="/projects/yuliethcardozo" className='text-shadow'>Yulieth Cardozo</Link>
            <Link to="/projects/inventory" className='text-shadow'>Inventario</Link>   
          </div>
      </div>
     
    
  );
}
export default Projects
