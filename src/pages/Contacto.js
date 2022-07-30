import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagramSquare,
    faFacebookSquare,
    faFacebookMessenger,
    faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelopeSquare,
    faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
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

                <div className={contactStyles.contactComplete}>
                    <Card className={`${contactStyles.contactBox} `}>
                        <strong>Nuestro teléfono</strong>
                        <div className={contactStyles.linksBox}>
                            <a href="tel:8116571440">
                                <FontAwesomeIcon
                                    className={contactStyles.socialIcon}
                                    icon={faPhoneSquare}
                                    size="4x"
                                />
                            </a>
                            <a
                                href="tel:8116571440"
                                className={contactStyles.links}>
                                81 1657 1440
                            </a>
                        </div>

                        <strong>Escríbenos por WhatsApp</strong>
                        <div className={contactStyles.linksBox}>
                            <a
                                href="https://wa.me/message/AQESZAPMHK7WJ1"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faWhatsappSquare}
                                    size="4x"
                                    className={contactStyles.socialIcon}
                                />
                            </a>
                            <a
                                href="https://wa.me/message/AQESZAPMHK7WJ1"
                                target="_blank"
                                rel="noreferrer"
                                className={contactStyles.links}>
                                https://wa.me/message/AQESZAPMHK7WJ1
                            </a>
                        </div>

                        <strong>Contáctanos por Messenger</strong>
                        <div className={contactStyles.linksBox}>
                            <a
                                href="http://m.me/comedormensajerodepaz"
                                target="_blank"
                                rel="noreferrer"
                                width="46px"
                                height="46px">
                                <FontAwesomeIcon
                                    icon={faFacebookMessenger}
                                    size="4x"
                                    className={contactStyles.socialIcon}
                                />
                            </a>
                            <a
                                href="http://m.me/comedormensajerodepaz"
                                target="_blank"
                                rel="noreferrer"
                                className={contactStyles.links}>
                                https://m.me/comedormensajerodepaz
                            </a>
                        </div>

                        <strong>Nuestro correo</strong>
                        <div className={contactStyles.linksBox}>
                            <a href="mailto:info@comedorinfantilmdepaz.org">
                                <FontAwesomeIcon
                                    icon={faEnvelopeSquare}
                                    size="4x"
                                    className={contactStyles.socialIcon}
                                />
                            </a>
                            <a
                                href="mailto:info@comedorinfantilmdepaz.org"
                                className={contactStyles.links}>
                                info@comedorinfantilmdepaz.org
                            </a>
                        </div>
                        <strong>Nuestras Redes Sociales</strong>
                        <div className={contactStyles.linksBox}>
                            <a
                                href="https://www.facebook.com/comedormensajerodepaz"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    size="4x"
                                    className={contactStyles.socialIcon}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/comedorinfantilmensajero/"
                                target="_blank"
                                rel="noreferrer"
                                className={contactStyles.links}>
                                <FontAwesomeIcon
                                    icon={faInstagramSquare}
                                    size="4x"
                                    className={contactStyles.socialIcon}
                                />
                            </a>
                        </div>
                    </Card>
                    <div className={contactStyles.mapBox}>
                        <iframe
                            className={contactStyles.mapGoogle}
                            title="Ubicación en Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.368805710248!2d-100.36691358497978!3d25.725314583653265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297b8123fb51b%3A0x2cab3c0a0dc0fece!2sComedor%20Infantil%20Mensajero%20de%20Paz!5e0!3m2!1ses-419!2smx!4v1611898702545!5m2!1ses-419!2smx"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contacto;
