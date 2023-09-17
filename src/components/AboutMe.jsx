import IntelliJ from "./img/IntelliJ.png"
import js from "./img/logo3.png"
import java from "./img/java.png"
import mysql from "./img/mysql.png"
import nodejs from "./img/nodejs.png"
import reactlogo from "./img/react.png"
import springboot from "./img/springboot.png"
import sql from "./img/sql.png"
import vsc from "./img/vsc.png"
import gitHub from "./img/gitHub.png"
import cv from "./cv/GriselOrtizClavijo.pdf"

const AboutMe = () => {
  return (
    <>

    <div className="flex flex-col justify-center pt-20">
        <section className="text-center text-xl pt-20 pl-40 pr-60 items-center">
       
        <div className="items-center fixed top-0 left-0 p-10 w-full justify-center w-screen text-black ">
          <h2 className="text-justify text-5xl pl-20">Sobre mí</h2>
        </div>
          <h5 className="text-center text-base pl-60 pr-60">
            Apasionada por el desarrollo de software y enconstante búsqueda de nuevos desafíos.
            Mi trayectoria previa en el campo asistencial y administrativo, me brinda una perspectiva única 
            y habilidades transferibles al mundo tecnológico.
            <br/>
            En proceso de aprendizaje de habilidades técnicas y habilidades blandas, estoy decidida a crecer 
            en el campo del desarrollo desoftware y contribuir con soluciones innovadoras.
            Mi curiosidad, compromiso y perseverancia con el aprendizaje me impulsan a superar obstáculos 
            y alcanzar nuevos niveles de excelencia.
            <br/> 
            Si estás en busca de un miembro apasionado para tu equipo, 
            necesitas ayuda con un proyecto o simplemente quieres conectar... 
            <br/> 
            <br/> 
            ¡No dudes en contactarme!  
          </h5>
          <a href={cv} download>
            <button className="btn">
              Descargar CV
            </button>
            </a>
        </section>
        <section className="text-center text-xl pt-5 items-center">

              <div className="icons-container">
                <img src={js} alt="" className="icons" />
                <img src={java} alt="" className="icons" />
                <img src={mysql} alt="" className="icons" />
                <img src={nodejs} alt="" className="icons" />
                <img src={reactlogo} alt="" className="icons" />
                <img src={springboot} alt="" className="icons" />
                <img src={sql} alt="" className="icons" />
                <img src={vsc} alt="" className="icons" />
                <img src={IntelliJ} alt="" className="icons" />
                <img src={gitHub} alt="" className="icons" />
              </div>
        </section>
    </div>
       
    </>
    
  )
}

export default AboutMe