import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const links = [
  {
    link: '/',
    text: 'Home',
    id: 1
  },
  {
    link: '/aboutMe',
    text: 'Un poco más...',
    id: 2
  },
  {
    link: '/projects',
    text: 'Proyectos',
    id: 3
  }, 
  {
    link: '/contact',
    text: 'Contacto',
    id: 4
  }

];

const NavBar = ({setShowProjectContent}) => {

  const[isMenuOpen, setIsMenuOpen] = useState(false);
  
  NavBar.propTypes = {
    setShowProjectContent: PropTypes.func.isRequired,
  };

  const[windowDimension, SetWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,

  });

  const detecSize = () =>{
    SetWindowDimension({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detecSize);
    return () => {
    window.addEventListener("resize", detecSize);
    }
  }, [windowDimension.innerWidth]);
    
    return (

 
       <div className= {
        !isMenuOpen ? "fixed  bottom-0 left-0 right-0 flex items-center h-1/6 justify-evenly bg-slate-500 p-10 " : 
        "fixed bottom-0 left-0 right-0 flex items-center h-1/6 justify-evenly bg-slate-500 p-10"
       }>
        {
          windowDimension.innerWidth > 768 
          ? links.map((l) => (
            <Link 
                className='text-2xl text-white font-semibold' 
                to={l.link} 
                key={l.id}
                onClick={() => {
                  if (l.link === '/projects') {
                    setShowProjectContent(false);
                  }
                  setIsMenuOpen(false); 
                }}
              >
                {l.text}
            </Link>
          )) 
          : isMenuOpen && 
          links.map((l)  => (
            <Link 
                className='text-2xl text-white font-semibold' 
                to={l.link} 
                key={l.id}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.text}
            </Link>
          ))
        }

        {
          !isMenuOpen && windowDimension.innerWidth < 768 ? (
          <AiOutlineMenu cursor={"pointer"} size={24} color="#f2f2f2" onClick= {() => setIsMenuOpen(true)}/>
          ) : windowDimension.innerWidth < 768  && (
          <AiOutlineClose cursor={"pointer"} size={24} color="#f2f2f2" onClick={ () => setIsMenuOpen(false)}/>
          )}
       </div>
     );
   }
   
   export default NavBar