
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Planazo from './components/projects/Planazo'
import Teofonita from './components/projects/Teofonita'
import PSA from './components/projects/PSA'
import Inventory from './components/projects/Inventory'
import YuliethCardozo from './components/projects/YuliethCardozo'

function App() {
  
  return (
    <div className='flex flex-col'>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/planazo' element={<Planazo/>} />
          <Route path='/projects/teofonita' element={<Teofonita/>} />
          <Route path='/projects/psa' element={<PSA/>} />
          <Route path='/projects/yuliethcardozo' element={<YuliethCardozo/>} />
          <Route path='/projects/inventory' element={<Inventory/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
