import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing/Landing'
import './App.css';
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail';
import Contacto from './Views/Contacto/Contacto';
import About from './Views/About/About';
import Error404 from './Views/Error404/Error404';
import Venta from './Views/Venta/Venta';
import Alquiler from './Views/Alquiler/Alquiler';

function App() {
  return (
    <>      
      <Routes>
        <Route index element={<Landing />} />  
        <Route path="Home" element={<Home />} />      
        <Route path="Detail" element={<Detail />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="About" element={<About />} />
        <Route path="Venta" element={<Venta />} />
        <Route path="Alquiler" element={<Alquiler />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
