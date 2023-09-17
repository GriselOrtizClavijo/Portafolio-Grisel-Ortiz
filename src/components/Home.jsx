import logo from "./img/logo2.png"
import cv from "./cv/GriselOrtizClavijo.pdf"



const Home = () => {
  const contacto = "./Contact";

  return (
    <div className="flex items-center fixed top-0 left-0 p-10 w-full fondo">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="text-10xl pt-6">PORTAFOLIO</h1>
        <section className="flex flex-col text-xl w-1/2 items-center">
          <p className="text-center">
            Hola! Soy Grisel Ortiz Clavijo, desarrolladora fullStack 
            con un apetito enorme por aprender y crear soluciones tecnológicas. 
            <br/> 
            <br/> 
            Si estás en busca de un miembro apasionado para tu equipo, 
            necesitas ayuda con un proyecto o simplemente quieres conectar... 
            <br/> 
            <br/> 
            ¡No dudes en contactarme!  
          </p>
            <a href={cv} download>
            <button className=" btn">
              Descargar CV
            </button>
            </a>
        </section>

      </div>
      
      <div className="flex flex-col w-1/2">
        <a href={contacto}>
        <img src={logo} alt="miLogo" className="mx-40 h-80 logo" />
        </a>
      </div>
  
    
  </div>
);
  
}

export default Home