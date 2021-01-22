import React, { Component, useState } from "react"
import Layout from "../components/layout";
import Head from "../components/head"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

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
    <Head title="Programas" />
    <div className="container mt-5">
      <h1 className="display-4">Sobre Nosotros</h1>
      <p className="lead">Tenemos como objetivo ayudar a personas en situación vulnerable (niños y niñas, personas de la tercera edad, mujeres embarazadas, madres solteras) fortaleciendo los valores morales y espirituales de cada familia, así mismo complementar sus necesidades básicas como alimentación, vestido, educación, nutrición y prevención de la salud.</p>
      <p className="lead">El primero de los Comedores nació en el año 2015 con el fin de que no haya niños en las calles, ofreciendo talleres formativos y alimentos después de la escuela. Actualmente contamos con 3 comedores en las Colonias Felipe Ángeles, Carmen Serdán y Garza Nieto. A su vez entregamos apoyos alimentarios a familias vulnerables de comunidades de Ciénega de Flores y Juárez, N.L.</p>
      <br />

      <CardDeck>
        {
        cards.map(card => (
          <Card>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
              {card.body.map(parrafo => (
                <p>{parrafo}</p>
              ))}
            </Card.Body>
          </Card>
        ))
        }
      </CardDeck>
      
    </div>
    </Layout>
  )
}

export default SobreNosotros;