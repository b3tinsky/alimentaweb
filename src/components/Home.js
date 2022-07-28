import React from "react";
import Layout from "./layout";
import Head from "./head";
import PaymentCards from "./PaymentCards";
import { Link } from "gatsby";
import {
    Card,
    CardDeck,
    Carousel,
    Button,
    ButtonToolbar,
    Image,
} from "react-bootstrap";
import { secciones, accordionTestimonios } from "./TextosHome";
import homeStyles from "../styles/components/home.module.scss";
import "../styles/components/homeCarousel.scss";

/* Pendientes:
2. Realizar cambios en la sección de apoyos
3. Agregar los colores nuevos a toda la pagina principal
*/
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
                                className={`${homeStyles.cards} col-6 mx-3 col-md-3 mx-md-5 col-lg-3 col-xl-2 mx-xl-auto`}
                                key={`section3-card-${card.id}`}>
                                <Card.Img
                                    className="px-lg-3 py-lg-3 p-xl-1"
                                    src={require("../images/home/" + card.img)}
                                />
                                <Card.Body className="px-0">
                                    <Card.Title
                                        className={homeStyles.cardTitle}>
                                        {card.title}
                                    </Card.Title>
                                    <Card.Text className={homeStyles.cardText}>
                                        {card.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
                <hr /> {/* Eliminar si no se usa */}
                <div className={homeStyles.fourthSection}>
                    <h1 className="display-5 pb-3">{secciones[2].title}</h1>
                    <CardDeck className={homeStyles.cardDeck}>
                        {secciones[2].cards.map((card) => (
                            <Card
                                className={homeStyles.cards}
                                key={`section4-card-${card.id}`}>
                                <Card.Body>
                                    <Card.Title>
                                        <p className={homeStyles.cardTitleN}>
                                            {card.titleN}
                                        </p>
                                        <p className={homeStyles.cardTitle}>
                                            {card.title }
                                        </p>
                                    </Card.Title>
                                    <p
                                        className={`${homeStyles.cardText} lead`}>
                                        {card.body}
                                    </p>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </div>
                <hr />
                <div className={homeStyles.fifthSection}>
                    <h1 className="display-5 pb-3">Testimonios</h1>
                    <Carousel
                        controls={false}
                        touch={true}
                        className={homeStyles.carousel}>
                        {accordionTestimonios.map((testimonio) => (
                            <Carousel.Item
                                key={`${testimonio.title}-${testimonio.id}`}>
                                <div>
                                    <Card className={homeStyles.carouselCards}>
                                        <Card.Body>
                                            <Card.Title
                                                className={
                                                    homeStyles.cardTitle
                                                }>
                                                {testimonio.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {testimonio.body}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <hr />
            </div>
        </Layout>
    );
}

export default Home;
