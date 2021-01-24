import React, { Component, useState } from "react"
import Layout from "../components/layout";
import Head from "../components/head"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from "gatsby";

function SobreNosotros() {
  const [cards, setCards] = useState([
    {
      title: "Misión",
      body: ["Implementar programas de desarrollo social y emocional en la niñez, mejorando la calidad de vida de los niños, combatiendo el hambre y a su vez, promoviendo y fortaleciendo los valores, la inclusión y la unidad familiar en todos los tejidos sociales."]
    },
    {
      title: "Visión",
      body: [
        "Lograr una niñez plena y feliz a través de la integración familiar, el desarrollo y fortalecimiento de las capacidades de cada niño, proveyendo herramientas necesarias para enfrentar el futuro de manera exitosa.",
        "Valores: Respeto, Honestidad, Paz, Responsabilidad, Compromiso, Solidaridad, Compasión, Empatía y Amor."
      ],
    },
    {
      title: "Valores",
      body: ["Creemos que el respeto y la honestidad son la columna vertebral para forjar la paz en nuestra sociedad, así mismo, con empatía, responsabilidad, compromiso y solidaridad se puede lograr que niños y jóvenes crezcan siendo hombres y mujeres de bien con amor hacia su prójimo replicando lo que ellos han aprendido."]
    },
  ]);


  return(
    <Layout>
    <Head title="Contacto" />
    <div className="container mt-5">
      <h1 className="display-4">Contacto</h1>
      <p className="lead">Eugenio Aguirre Benavides 4813 64170 Monterrey, N.L., México</p>
      
      <div class="row justify-content-center">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.437784117092!2d-100.36176758497992!3d25.723032383654388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866296866aaa9285%3A0x8ed76d743e789718!2sEugenio%20Benavides%204813%2C%20Marvel%2C%2064170%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1611300992348!5m2!1ses-419!2smx" 
          width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        
        <Card className="col-lg-9 col-xl-5 mx-lg-auto ml-xl-auto mr-xl-0 my-2 py-4">
          
          <strong>Nuestro teléfono</strong>
          <p><a href="tel:8116571440">81 1657 1440</a></p>
          
          <strong>Escríbenos por WhatsApp</strong>
          <p>
            <Link to="https://wa.me/message/AQESZAPMHK7WJ1" target="_blank">
              <Image width="64px" height="64px" style={{padding: "7px"}} src={require('C:/Users/Raul/Desktop/whatsapp-logo-1.png')} />
            </Link>
            <Link to="https://wa.me/message/AQESZAPMHK7WJ1" target="_blank">
              https://wa.me/message/AQESZAPMHK7WJ1
            </Link>
          </p>

          <strong>Contáctanos por Messenger</strong>
          <p>
            <Link to="http://m.me/esperanzaaldebil" target="_blank">
              <Image width="64px" height="64px" style={{padding: "3px"}} src={require('C:/Users/Raul/Desktop/Messenger-BRC-10.19.2020/Downloadable Assets/Logo/P3/logo-1024.png')} />
            </Link>
            <Link to="http://m.me/esperanzaaldebil" target="_blank">
              https://m.me/esperanzaaldebil
            </Link>
          </p>

          <strong>Nuestro correo</strong>
          <p><a href="mailto:info@comedorinfantilmdepaz.org">info@comedorinfantilmdepaz.org</a></p>
          <div>
            <Button variant="primary" href="mailto:info@comedorinfantilmdepaz.org">Envíanos un correo</Button>
          </div>
          
        </Card>
      </div>
      
    </div>
    </Layout>
  )
}

export default SobreNosotros;