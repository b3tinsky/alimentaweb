import React from "react";
import Layout from "./layout";
import Head from "./head";
import { Link } from "gatsby";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import { Card, CardDeck } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { secciones, accordionTestimonios } from "./TextosHome";
import homeStyles from "../styles/components/home.module.scss";

function Home() {
    return (
        <Layout>
            <Head title="Comedor Infantil Mensajero de Paz" />
            <div className="container mt-5">
                <div className={`${homeStyles.firstSection} row`}>
                    <div
                        className={`${homeStyles.sectionLeft} col-12 col-md-10 col-lg-7 col-xl-6`}>
                        <Image
                            className={`${homeStyles.logo} col-8 col-md-6 col-lg-4 mx-lg-auto`}
                            src={require("../images/home/logo-esperanza-al-debil.png")}
                        />
                        <h1 className="text-center">
                            Siembra hoy en los niños, cosecha mañana un mundo
                            transformado
                        </h1>
                        <ButtonToolbar className={homeStyles.buttonToolbar}>
                            <Button
                                className={homeStyles.homeButtons}
                                as={Link}
                                to="/ComoAyudar">
                                Como Ayudar
                            </Button>
                            <Button
                                className={homeStyles.homeButtons}
                                as={Link}
                                to="/Contacto">
                                Contacto
                            </Button>
                        </ButtonToolbar>
                    </div>
                    <iframe
                        className="col-12 col-md-10 col-lg-7 col-xl-6"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/W6CN3Q_-6cw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Informe Actividades Anuales"></iframe>
                </div>
                <hr /> {/* Eliminar si no se usa */}
                <div className={homeStyles.secondSection}>
                    <h1 className="display-5 pb-3">{secciones[0].title}</h1>
                    <div className="row justify-content-center">
                        <Card className="col-12 col-lg-7 border-0">
                            <Card.Body className="pt-0 pt-lg-3">
                                {secciones[0].cards[0].body.map((parrafo) => (
                                    <p
                                        key={`parrafo-${parrafo.id}-seccion1`}
                                        className="lead text-justify">
                                        {parrafo.text}
                                    </p>
                                ))}
                            </Card.Body>
                        </Card>

                        <Card className="col-8 mx-10 col-lg-5 col-xl-4 mx-lg-auto border-0">
                            <Card.Img
                                src={require(`../images/home/${secciones[0].cards[1].img}`)}
                            />
                        </Card>
                    </div>
                </div>
                <hr /> {/* Eliminar si no se usa */}
                <div className={homeStyles.thirdSection}>
                    <h1 className="display-5 pb-3">{secciones[1].title}</h1>
                    <div className="row justify-content-center">
                        {secciones[1].cards.map((card) => (
                            <Card
                                className="col-4 mx-3 col-md-3 mx-md-5 col-lg-3 col-xl-2 mx-lg-auto border-0"
                                key={`card-${card.id}`}>
                                <Card.Img
                                    className="px-lg-4 py-lg-0 p-xl-0"
                                    src={require("../images/home/" + card.img)}
                                />
                                <Card.Body className="px-0">
                                    <Card.Title style={{ textAlign: "center" }}>
                                        {card.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
                <hr />
                <h1 className="display-5 pb-3">{secciones[2].title}</h1>
                <CardDeck>
                    {secciones[2].cards.map((card) => (
                        <Card>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>
                                    {card.title}
                                </Card.Title>
                                {card.body.map((parrafo) => (
                                    <p className="lead text-justify">
                                        {parrafo}
                                    </p>
                                ))}
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
                <hr />
                <h1 className="display-5 pb-3">Testimonios</h1>
                <Accordion defaultActiveKey="0">
                    {accordionTestimonios.map((seccion) => (
                        <Card id={seccion.id}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey={`${seccion.id}`}>
                                    {seccion.title}
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey={`${seccion.id}`}>
                                <Card.Body>
                                    <ListGroup className="list-group-flush">
                                        {seccion.body.map((parrafo) => (
                                            <ListGroupItem className="text-justify">
                                                {parrafo}
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
                <hr />
                <h1 className="display-5 pb-3">Aportar a la causa</h1>
                <p className="lead text-justify">
                    Puedes hacer donativos en especie, o bien donar directamente
                    a nuestro PayPal, Moneypool o cuenta bancaria
                </p>
                <p className="lead text-justify">
                    <strong>
                        Alimenta una Familia con $500 y/o Aportación Voluntaria
                    </strong>
                </p>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0">
                                <h3>Deposita a nuestra cuenta bancaria</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="row justify-content-center">
                                <div className="col-12 col-sm-5 col-lg-4 mx-auto py-3 border-0">
                                    <p className="lead">
                                        <strong>Número de cuenta:</strong>
                                        <br />
                                        194119917
                                    </p>
                                    <p className="lead">
                                        <strong>Clabe:</strong>
                                        <br />
                                        062580 001941 199171
                                    </p>
                                    <p className="lead">
                                        <strong>Referencia:</strong>
                                        <br />
                                        Alimenta una familia
                                    </p>
                                    <h5>
                                        <strong>
                                            También puedes depositar en Oxxo
                                        </strong>
                                    </h5>
                                    <p className="lead">
                                        <strong>
                                            Depositos a tarjeta de débito:
                                        </strong>
                                        <br /> 4320 4901 0098 9779
                                    </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                            {/* Modificar link de paypal y moneypool */}
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                href="https://www.paypal.com/paypalme/comedorinfantil"
                                target="_blank"
                                eventKey="1">
                                <Card.Img
                                    src={require("../images/home/paypal logo.png")}
                                />
                            </Accordion.Toggle>
                        </Card.Header>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                href="https://www.moneypool.mx/p/yAW1A2k"
                                target="_blank"
                                eventKey="2">
                                <Card.Img
                                    src={require("../images/home/moneypool logo.png")}
                                />
                            </Accordion.Toggle>
                        </Card.Header>
                    </Card>
                </Accordion>
            </div>
        </Layout>
    );
}

export default Home;
