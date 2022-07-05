import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagramSquare,
    faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import contactStyles from "../styles/pages/Contacto.module.scss";

function Contacto() {
    return (
        <Layout>
            <Head title="Contacto" />
            <div className="container mt-5">
                <h1 className="display-4">Contacto</h1>
                <p className="lead">
                    Comedor Infantil Mensajero de Paz
                    <br />
                    Calle Cesena 5311, Valle de Santa Cecilia, 64150 Monterrey,
                    N.L., México
                </p>

                <div class="row justify-content-center">
                    <iframe
                        title="Ubicación en Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.368805710248!2d-100.36691358497978!3d25.725314583653265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297b8123fb51b%3A0x2cab3c0a0dc0fece!2sComedor%20Infantil%20Mensajero%20de%20Paz!5e0!3m2!1ses-419!2smx!4v1611898702545!5m2!1ses-419!2smx"
                        width="600"
                        height="450"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"></iframe>

                    <Card className="col-lg-9 col-xl-5 mx-lg-auto ml-xl-auto mr-xl-0 my-2 py-4">
                        <strong>Nuestro teléfono</strong>
                        <p>
                            <a href="tel:8116571440">81 1657 1440</a>
                        </p>

                        <strong>Escríbenos por WhatsApp</strong>
                        <p>
                            <Link
                                to="https://wa.me/message/AQESZAPMHK7WJ1"
                                target="_blank">
                                <Image
                                    width="64px"
                                    height="64px"
                                    style={{ padding: "7px" }}
                                    src={require("../images/contacto/whatsapp-logo-1.png")}
                                />
                            </Link>
                            <Link
                                to="https://wa.me/message/AQESZAPMHK7WJ1"
                                target="_blank">
                                https://wa.me/message/AQESZAPMHK7WJ1
                            </Link>
                        </p>

                        <strong>Contáctanos por Messenger</strong>
                        <p>
                            <Link
                                to="http://m.me/esperanzaaldebil"
                                target="_blank">
                                <Image
                                    width="64px"
                                    height="64px"
                                    style={{ padding: "3px" }}
                                    src={require("../images/contacto/messenger-logo-1024.png")}
                                />
                            </Link>
                            <Link
                                to="http://m.me/esperanzaaldebil"
                                target="_blank">
                                https://m.me/esperanzaaldebil
                            </Link>
                        </p>

                        <strong>Nuestro correo</strong>
                        <p>
                            <a href="mailto:info@comedorinfantilmdepaz.org">
                                info@comedorinfantilmdepaz.org
                            </a>
                        </p>
                        <div>
                            <Button
                                variant="primary"
                                href="mailto:info@comedorinfantilmdepaz.org">
                                Envíanos un correo
                            </Button>
                            <Link
                                to="https://www.facebook.com/comedormensajerodepaz"
                                target="_blank">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    size="3x"
                                    transform="down-5"
                                    className={contactStyles.socialIcon}
                                />
                            </Link>
                            <Link
                                to="https://www.instagram.com/comedorinfantilmensajero/"
                                target="_blank">
                                <FontAwesomeIcon
                                    icon={faInstagramSquare}
                                    size="3x"
                                    transform="down-5"
                                    className={contactStyles.socialIcon}
                                />
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Contacto;
