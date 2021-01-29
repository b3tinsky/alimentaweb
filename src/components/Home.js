import React from "react"
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
  const secciones = [
    {
      id: 0, title: "Apoyo durante la pandemia",
      cards: [
        {
          img: "despensaicono.png",
          title: "1085 Despensas Familiares",
        },
        {
          img: "appleicon.png",
          title: "+1,800 Apoyos Alimentarios",
        },
        {
          img: "familyicon.png",
          title: "125 Familias Apadrinadas",
        },
        {
          img: "peopleicon.png",
          title: "+4,000 Personas Beneficiadas",
        },
      ]
    },
    {
      id: 1, title: "¿Quiénes somos?",
      cards: [
        {
          img: "",
          body: ["Somos una Asociación Civil, con 5 años de experiencia, que tiene como principal actividad, atender a niños con el modelo de comedores infantiles.", "Tenemos como objetivo ayudar a personas en situación vulnerable (niños y niñas, personas de la tercera edad, mujeres embarazadas, madres solteras) fortaleciendo los valores morales y espirituales de cada familia, así mismo complementar sus necesidades básicas como alimentación, vestido, educación, nutrición y prevención de la salud."]
        },
        {
          img: "nuggets-costco-gracias-17_crop.jpg",
          body: []
        }
      ]
    },
    {
      id: 2, title: "5 Años De Experiencia",
      cards: [
        {
          title: "442 Beneficiarios",
          body: ["Actualmente apoyamos a 157 adultos, 232 niños y adolescentes, 46 personas de la tercera edad, 7 discapacitados y contando…"]
        },
        {
          title: "3 Comedores",
          body: ["Ofrecemos talleres formativos, culturales, de fomento educativo. Otorgamos alimentos nutritivos junto a planes nutricionales. Un gran punto para fomentar una comunidad."]
        },
        {
          title: "2 Apoyos Alimentarios",
          body: ["Otorgamos apoyos alimentarios semanales a primera infancia, familias y población de la 3era edad, que se encuentren en situaciones económicas severas."]
        }
      ]
    },
  ];

  const accordionTestimonios = [
    {
      id: 0,
      title: "Voluntariado",
      body: ["Después de casi un año trabajando como voluntaria en el comedor infantil, sólo puedo decir que es una experiencia que llena de energía y con ganas de seguir aportando en el crecimiento y desarrollo de los niños. No hay algo que se podrá comparar con la sensibilidad que te da el interactuar directamente con los niños día a día. El saber cuales son sus necesidades, formas de actuar, sus sentimientos, lo que les gusta o no, jugar con ellos y hacerles ver que hay todo un mundo allá afuera por conocer independientemente de la situación de cada uno.", "El trabajo de voluntariado consiste en adaptarte a todo, los recursos, las situaciones, el ambiente, las personas y tratar de sacar el mejor provecho de esto para el bien de todos. Sin duda cada que tengo la oportunidad de compartir mi experiencia me gusta invitar a todos a sumarse en esta red de apoyo que cambia vidas."]
    },
    {
      id: 1,
      title: "Beneficiarios",
      body: ["Estoy muy agradecida por el apoyo que el comedor infantil ha brindado a mi familia en estos tiempos tan difíciles donde he estado varios meses sin trabajo. Gracias por las despensas, útiles escolares y juguetes que mis niños han recibido con tanta alegría. A mis niños les gusta mucho ir al comedor infantil por las actividades que hacen ahí y la atención que reciben. Muchas gracias.", "La comida, las clases de apoyo y los útiles escolares son un gran apoyo y una gran ayuda para mí y para mis dos hijos, hemos recibido atención constantemente, estamos muy agradecidos.", "El apoyo a los niños es incondicional, y para mí como mamá, es de gran ayuda, yo le tengo agradecimiento a todos los que colaboran en el comedor, sacan fuerzas para poder atender a los niños con amor y a las mamás y abuelitas también."]
    },
    {
      id: 2,
      title: "Niños",
      body: ["Desde que vengo a las escuelitas del comedor me gusta mucho porque hacemos cosas divertidas.", "Me gusta estar aquí porque hacemos manualidades.", "Me gusta venir al comedor porque aprendo cosas nuevas.", "La comida es muy rica."]
    }
  ];

  return(
    <Layout>
    <Head title="Comedor Infantil Mensajero de Paz" />
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center mb-4">
        <Image className="col-8 col-md-6 col-lg-4 mx-lg-auto" src={require('../images/home/logo-esperanza-al-debil.png')} />

        <iframe className="col-12 col-md-10 col-lg-7 col-xl-6" width="560" height="315" src="https://www.youtube.com/embed/jet92W6kEJI"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h1 className="display-4 text-center"><strong>Siembra hoy en los niños, cosecha mañana un mundo transformado</strong></h1>
      <hr />

      <h1 className="display-5 pb-3">{secciones[0].title}</h1>
      <div className="row justify-content-center">
      {
        secciones[0].cards.map(card => (
          <Card className="col-4 mx-3 col-md-3 mx-md-5 col-lg-3 col-xl-2 mx-lg-auto border-0">
            <Card.Img className="px-lg-4 py-lg-0 p-xl-0" src={require('../images/home/' + card.img)} />
            <Card.Body className="px-0">
              <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        ))
      }
      </div>
      <hr />
      

      <h1 className="display-5 pb-3">{secciones[1].title}</h1>
      <div className="row justify-content-center">
          <Card className="col-12 col-lg-7 border-0">
            <Card.Body className="pt-0 pt-lg-3">
              {secciones[1].cards[0].body.map(parrafo => (
                <p className="lead text-justify">{parrafo}</p>
              ))}
            </Card.Body>
          </Card>

          <Card className="col-8 mx-10 col-lg-5 col-xl-4 mx-lg-auto border-0">
            <Card.Img src={require('../images/home/' + secciones[1].cards[1].img)} />
          </Card>
      </div>
      <hr />
      
      
      <h1 className="display-5 pb-3">{secciones[2].title}</h1>
      <CardDeck>
      {
        secciones[2].cards.map(card => (
          <Card>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
              {card.body.map(parrafo => (
                <p className="lead text-justify">{parrafo}</p>
              ))}
            </Card.Body>
          </Card>
        ))
      }
      </CardDeck>
      <hr />
      
      
      <h1 className="display-5 pb-3">Testimonios</h1>
      <Accordion defaultActiveKey="0">
        {
          accordionTestimonios.map(seccion => (
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
                    <ListGroupItem className="text-justify">{parrafo}</ListGroupItem>
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
      <p className="lead text-justify">Puedes hacer donativos en especie, o bien donar directamente a nuestro PayPal, Moneypool o cuenta bancaria</p>
      <p className="lead text-justify"><strong>Alimenta una Familia con $500 y/o Aportación Voluntaria</strong></p>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Deposita a nuestra cuenta bancaria
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="row justify-content-center">
                <div className="col-12 col-sm-5 col-lg-4 mx-auto py-3 border-0">
                  <p className="lead"><strong>Número de cuenta:</strong><br />5204 1601 7400 3090</p>
                  <p className="lead"><strong>Referencia:</strong><br />Alimenta una familia</p>
                  <p className="lead">O escanea nuestro código QR</p>
                </div>

                <Card.Img className="col-7 col-md-5 col-lg-4 mx-auto" src={require('../images/home/qr_citibanamex.jpg')} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              PayPal
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <form action="https://www.paypal.com/donate" method="post" target="_blank">
                <input type="hidden" name="hosted_button_id" value="KQKYAVXP9XYSY" />
                <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/es_MX/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" href="https://www.moneypool.mx/p/ey3FWEY#" target="_blank" eventKey="2">
              Moneypool
            </Accordion.Toggle>
          </Card.Header>
        </Card>
      </Accordion>

    </div>
    </Layout>
  )
}

export default Home;