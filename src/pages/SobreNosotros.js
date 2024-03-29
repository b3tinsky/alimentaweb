import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Card from "react-bootstrap/Card";
import { CardDeck } from "react-bootstrap";
import styles from "../styles/pages/SobreNosotros.module.scss";

function SobreNosotros() {
    const cards = [
        {
            title: "Misión",
            body: [
                "Mejorar la calidad de vida de los niños con limitadas oportunidades, combatiendo el hambre, fortaleciendo su educación y promoviendo los valores, la inclusión y la unidad familiar.",
            ],
            img: ["sobreNosotros/1QS"],
        },
        {
            title: "Visión",
            body: [
                "Lograr una niñez plena y feliz a través de la integración familiar, el desarrollo y fortalecimiento de las capacidades de cada niño y cada niña, proveyendo herramientas necesarias para enfrentar el futuro de manera exitosa.",
            ],
            img: ["sobreNosotros/2QS"],
        },
        {
            title: "Valores",
            body: [
                "Creemos que el respeto y la honestidad son la columna vertebral para forjar la paz en nuestra sociedad, así mismo, con empatía, responsabilidad, compromiso y solidaridad se puede lograr que niños y jóvenes crezcan siendo hombres y mujeres de bien con amor hacia su prójimo replicando lo que ellos han aprendido.",
            ],
            img: ["sobreNosotros/3QS"],
        },
    ];

    return (
        <Layout>
            <Head title="Programas" />
            <div className="container mt-5">
                <h1 className="display-4">Sobre Nosotros</h1>
                <p className="lead">
                    Tenemos como objetivo ayudar a personas en situación
                    vulnerable (niños y niñas, personas de la tercera edad,
                    mujeres embarazadas, madres solteras) fortaleciendo los
                    valores morales y espirituales de cada familia, así mismo
                    complementar sus necesidades básicas como alimentación,
                    vestido, educación, nutrición y prevención de la salud.
                </p>
                <p className="lead">
                    El primero de los Comedores nació en el año 2015 con el fin
                    de que no haya niños en las calles, ofreciendo talleres
                    formativos y alimentos después de la escuela. Actualmente
                    contamos con 3 comedores en las Colonias Felipe Ángeles,
                    Carmen Serdán y Garza Nieto. A su vez entregamos apoyos
                    alimentarios a familias vulnerables de comunidades de
                    Ciénega de Flores y Juárez, N.L.
                </p>
                <br />

                <CardDeck>
                    {cards.map((card) => (
                        <Card className={styles.cards} key={card.title}>
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>
                                    {card.title}
                                </Card.Title>
                                {card.body.map((parrafo) => (
                                    <Card.Text
                                        key={`${card.title}-1`}
                                        className={styles.cardText}>
                                        {parrafo}
                                    </Card.Text>
                                ))}
                                <Card.Img
                                    src={require(`../images/${card.img}.jpeg`)}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        </Layout>
    );
}

export default SobreNosotros;
