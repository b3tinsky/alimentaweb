import React, { Component, useState } from "react"
import Layout from "../components/layout";
import Head from "../components/head"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Home() {
  const [secciones, setSecciones] = useState([
    {
      id: 0, title: "Apoyo durante la pandemia", description: [],
      cardClassName: "border-0", cards: [
        {
          img: "despensaicono.png",
          title: "1085 Despensas Familiares",
          body: []
        },
        {
          img: "appleicon_black.png",
          title: "+1,800 Apoyos Alimentarios",
          body: []
        },
        {
          img: "familyicon.png",
          title: "125 Familias Apadrinadas",
          body: []
        },
        {
          img: "peopleicon.png",
          title: "+4,000 Personas Beneficiadas",
          body: []
        },
      ]
    },
    {
      id: 1, title: "¿Quiénes somos?", description: ["Somos una Asociación Civil, con 5 años de experiencia, que tiene como principal actividad, atender a niños con el modelo de comedores infantiles.", "Tenemos como objetivo ayudar a personas en situación vulnerable (niños y niñas, personas de la tercera edad, mujeres embarazadas, madres solteras) fortaleciendo los valores morales y espirituales de cada familia, así mismo complementar sus necesidades básicas como alimentación, vestido, educación, nutrición y prevención de la salud"],
      cardClassName: "border-0", cards: [
        {
          img: "",
          body: ["Somos una Asociación Civil, con 5 años de experiencia, que tiene como principal actividad, atender a niños con el modelo de comedores infantiles.", "Tenemos como objetivo ayudar a personas en situación vulnerable (niños y niñas, personas de la tercera edad, mujeres embarazadas, madres solteras) fortaleciendo los valores morales y espirituales de cada familia, así mismo complementar sus necesidades básicas como alimentación, vestido, educación, nutrición y prevención de la salud"]
        },
        {
          img: "nuggets-costco-gracias-17_crop.jpg",
          body: []
        }
      ]
    },
    {
      id: 2, title: "5 Años De Experiencia", description: [],
      cardClassName: "", cards: [
        {
          img: "",
          title: "442 Beneficiarios",
          body: ["Actualmente apoyamos a 157 adultos, 232 niños y adolescentes, 46 personas de la tercera edad, 7 discapacitados y contando…"]
        },
        {
          img: "",
          title: "3 Comedores",
          body: ["Ofrecemos talleres formativos, culturales, de fomento educativo. Otorgamos alimentos nutritivos junto a planes nutricionales. Un gran punto para fomentar una comunidad."]
        },
        {
          img: "",
          title: "2 Apoyos Alimentarios",
          body: ["Otorgamos apoyos alimentarios semanales a primera infancia, familias y población de la 3era edad, que se encuentren en situaciones económicas severas."]
        }
      ]
    },
  ]);

  const [seccionesAccordion, setSeccionesAccordion] = useState ([
    {
      id: 3, title: "Testimonios", description: [],
      cards: [
        {
          id: 0,
          img: "",
          title: "Voluntariado",
          body: ["Después de casi un año trabajando como voluntaria en el comedor infantil, sólo puedo decir que es una experiencia que llena de energía y con ganas de seguir aportando en el crecimiento y desarrollo de los niños. No hay algo que se podrá comparar con la sensibilidad que te da el interactuar directamente con los niños día a día. El saber cuales son sus necesidades, formas de actuar, sus sentimientos, lo que les gusta o no, jugar con ellos y hacerles ver que hay todo un mundo allá afuera por conocer independientemente de la situación de cada uno.", "El trabajo de voluntariado consiste en adaptarte a todo, los recursos, las situaciones, el ambiente, las personas y tratar de sacar el mejor provecho de esto para el bien de todos. Sin duda cada que tengo la oportunidad de compartir mi experiencia me gusta invitar a todos a sumarse en esta red de apoyo que cambia vidas."]
        },
        {
          id: 1,
          img: "",
          title: "Beneficiarios",
          body: ["Estoy muy agradecida por el apoyo que el comedor infantil ha brindado a mi familia en estos tiempos tan difíciles donde he estado varios meses sin trabajo. Gracias por las despensas, útiles escolares y juguetes que mis niños han recibido con tanta alegría. A mis niños les gusta mucho ir al comedor infantil por las actividades que hacen ahí y la atención que reciben. Muchas gracias.", "La comida, las clases de apoyo y los útiles escolares son un gran apoyo y una gran ayuda para mí y para mis dos hijos, hemos recibido atención constantemente, estamos muy agradecidos.", "El apoyo a los niños es incondicional, y para mí como mamá, es de gran ayuda, yo le tengo agradecimiento a todos los que colaboran en el comedor, sacan fuerzas para poder atender a los niños con amor y a las mamás y abuelitas también."]
        },
        {
          id: 2,
          img: "",
          title: "Niños",
          body: ["Desde que vengo a las escuelitas del comedor me gusta mucho porque hacemos cosas divertidas.", "Me gusta estar aquí porque hacemos manualidades.", "Me gusta venir al comedor porque aprendo cosas nuevas.", "La comida es muy rica."]
        }
      ]
    },
    {
      id: 4, title: "Aportar a la causa", description: ["Puedes hacer donativos en especie, o bien donar directamente a nuestro PayPal, Moneypool o cuenta bancaria.", "Alimenta una Familia con $500 y/o Aportación Voluntaria"],
      blank: "", cards: [
        {
          id: 0,
          title: "Deposita a nuestra cuenta bancaria",
          buttonlink: "#",
          body: ["Número de cuenta: 5204 1601 7400 3090", "Referencia: Alimenta una familia", "O escanea nuestro código QR"],
          card_cards: [
            {
              img: "",
              body: ["Número de cuenta: 5204 1601 7400 3090", "Referencia: Alimenta una familia", "O escanea nuestro código QR"]
            },
            {
              img: "qr_citibanamex.jpg",
              body: []
            }
          ]
        },
        {
          id: 1,
          img: "placeholder_paypal.png",
          title: "PayPal",
          buttonlink: "#",
          body: [],
          card_cards: [
            {
              img: "placeholder_paypal.png",
              body: []
            }
          ]
        },
        {
          id: 2,
          title: "Moneypool",
          buttonlink: "https://www.moneypool.mx/p/ey3FWEY",
          body: [],
          card_cards: [
            {
              img: "placeholder_tarjetas.png",
              body: []
            }
          ]
        },
        {
          id: 3,
          title: "Pago con tarjeta",
          buttonlink: "#",
          body: [],
          card_cards: [
            {
              img: "placeholder_tarjetas.png",
              body: []
            }
          ]
        }
      ]
    }
  ]);

  return(
    <Layout>
    <Head title="Comedor Infantil Mensajero de Paz" />
    <div className="container mt-5">
      <div className="text-center">
        <Image src={require('../images/home/logo-esperanza-al-debil.png')} />
        <h1 className="display-4"><strong>Siembra hoy en los niños, cosecha mañana un mundo transformado</strong></h1>
      </div>
      <br />
      <hr />

      {
        secciones.map(seccion => (
          <div>
            <h1 className="display-5 pb-3">{seccion.title}</h1>
            <CardDeck>
            {
              seccion.cards.map(card => (
                <Card className={seccion.cardClassName}>
                  {(card.img != "") ? (
                    <Card.Img src={require('../images/home/' + card.img)} />
                  ) : (
                    card.img
                  )}
                  <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
                    {card.body.map(parrafo => (
                      <p className="lead">{parrafo}</p>
                    ))}
                  </Card.Body>
                </Card>
              ))
            }
            </CardDeck>
            <hr />
          </div>
        ))
      }
      
      
      <h1 className="display-5 pb-3">Testimonios</h1>
      <Accordion defaultActiveKey="0">
        {
          seccionesAccordion[0].cards.map(seccion => (
            <Card id = {seccion.id}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={`${seccion.id}`}>
                  {seccion.title}
                </Accordion.Toggle>
              </Card.Header>
              
              <Accordion.Collapse eventKey={`${seccion.id}`}>
                <Card.Body>
                  <ListGroup className="list-group-flush">
                  {seccion.body.map(parrafo => (
                    <ListGroupItem>{parrafo}</ListGroupItem>
                  ))}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
        }
      </Accordion>
      <hr />

      
      <h1 className="display-5 pb-3">Aportar a la causa</h1>
      <p className="lead">Puedes hacer donativos en especie, o bien donar directamente a nuestro PayPal, Moneypool o cuenta bancaria</p>
      <p className="lead"><strong>Alimenta una Familia con $500 y/o Aportación Voluntaria</strong></p>
      <Accordion defaultActiveKey="0">
        {
          seccionesAccordion[1].cards.map(seccion => (
            <Card id = {seccion.id}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" href={seccion.buttonlink} target="_blank" eventKey={`${seccion.id}`}>
                  {seccion.title}
                </Accordion.Toggle>
              </Card.Header>


              {(seccion.buttonlink == "#") ? (
                <Accordion.Collapse eventKey={`${seccion.id}`}>
                  <Card.Body>
                    <CardDeck>
                    {
                      seccion.card_cards.map(card => (
                        <Card className="border-0">
                          {(card.img != "") ? (
                            <Card.Img src={require('../images/home/' + card.img)} />
                          ) : (
                            card.img
                          )}
                          <Card.Body>
                            {card.body.map(parrafo => (
                              <p>{parrafo}</p>
                            ))}
                          </Card.Body>
                        </Card>
                      ))
                    }
                    </CardDeck>
                  </Card.Body>
                </Accordion.Collapse>
              ) : (
                seccion.blank
              )}

              
            </Card>
          ))
        }
      </Accordion>

    </div>
    </Layout>
  )
}

export default Home;