import { Link } from "react-router-dom"


const YuliethCardozo = () => {
  return (
    <div className="flex flex-col justify-center pt-20">
          <div>
            <h2 className="text-justify text-5xl pl-20">Proyectos</h2>
          </div>

      <div className="description-project flex flex-col w-3/4 justify-center"> 
        <section>
          <img src="" alt="img1" />
          <img src="" alt="img2" />
          <img src="" alt="img3" />
          <img src="" alt="img4" />
        </section>
        <section >
          <p>
            Este es el de yulieth
            <br/>
            <br/>
            Este es el de yulieth
          </p>
        </section>
        <section>
          <br/>
          <br/>
          <h2 >Tecnologías utilizadas</h2>
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

export default YuliethCardozo