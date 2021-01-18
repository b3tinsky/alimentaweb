import React, { Component, useState } from "react"
import ComedoresCard from "./ComedoresCard";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Comedores() {
  {/**
  * Array of "Comedores" information that will be shown on the website
  */}
  const [comedores, setComedores] = useState([
    {
      id: 0, title: "Col. Carmen Serdán", description: "Ofrecemos apoyo alimentario a niños, madres de familia y abuelitos, con el fin de complementar su plan nutricional familiar. También ofrecemos talleres formativos y de fomento educativo por proyecto. En este comedor se tiene un programa especial de atención a la primera infancia.",
      images: ["comedores/1c1", "comedores/1c1", "comedores/1c1"],
      kids: 60, adultos: 45, abuelitos: 10, discapacitados: 3
    },
    {
      id: 1, title: "Col. Felipe Ángeles", description: "Ofrecemos talleres formativos, culturales, de fomento educativo y se otorgan alimentos nutritivos esenciales, especialmente para niños. Este comedor, tiene el fin de reducir a los niños en situación de calle y aumentar sus conocimientos y valores morales, para un desarrollo integral en la niñez.",
      images: ["comedores/2c1", "comedores/2c1", "comedores/2c1"],
      kids: 55, adultos: 30, abuelitos: 8, discapacitados: 2
    },
    {
      id: 2, title: "Col. Garza Nieto", description: "Ofrecemos apoyo escolar a niños con algún tipo de rezago, a su vez, otorgamos apoyo en su alimentación básica para niños, madres de familia, abuelitos y a algunos migrantes de la zona.",
      images: ["comedores/3c1", "comedores/3c1", "comedores/3c1"],
      kids: 72, adultos: 54, abuelitos: 10, discapacitados: 2
    },
  ]);

  {/**
  Main page - contains title and description for each section.
  */}
  return (
    <div className="container my-5">
      <h1 className="display-4">Comedores</h1>
      {/* <p className="lead">Optional description for this section</p> */}
      <div class="row justify-content-center">
      {
       comedores.map(comedor => (
         <ComedoresCard 
         id={comedor.id} 
         title={comedor.title} 
         description = {comedor.description} 
         images = {comedor.images}
         kids = {comedor.kids}
         adultos = {comedor.adultos}
         abuelitos = {comedor.abuelitos}
         discapacitados = {comedor.discapacitados}
        />
       ))
      }
      <img src={require('../images/comedores/0c0.png')} class="img-fluid" alt="Ellos te necesitan"></img>
      </div>
    </div>
  );
}

export default Comedores;