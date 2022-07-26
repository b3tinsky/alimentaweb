import React from "react";
import ComoAyudarCard from "../components/ComoAyudarCard";
import Layout from "../components/layout";
import Head from "../components/head";
import PaymentCards from "../components/PaymentCards";

function ComoAyudar() {
    /**
  Array of "manerasAyudar" that will be shown on the website
  **/
    const manerasAyudar = [
        {
            id: 0,
            title: "Apadrina una familia por $500",
            description:
                "Se un héroe a distancia. Apadrina una familia por $500 pesos al mes.",
            images: ["comoAyudar/1d1", "comoAyudar/1d2"],
        },
        {
            id: 1,
            title: "Aportaciones voluntarias",
            description:
                "Realiza aportaciones voluntarias para apoyar nuestros proyectos.",
            images: ["comoAyudar/2d1"],
        },
        {
            id: 3,
            title: "Sé voluntario",
            description:
                "Sé voluntario en nuestros eventos y programas para ayudar a las familias.",
            images: ["comoAyudar/3d1", "comoAyudar/3d2"],
        },
        {
            id: 4,
            title: "Donativos en especie",
            description:
                "Realiza donativos de alimentos de la canasta básica, útiles escolares, mochilas, ropa, zapatos y juguetes en buen estado",
            images: ["comoAyudar/4d1", "comoAyudar/4d2", "comoAyudar/4d3"],
        },
    ];

    /*Styles for the scrollable second column */
    let styles = {
        overflowY: "scroll",
        height: "1000px",
    };

    /*
  	Main page - contains title and description for each section.
  	*/
    return (
        <Layout>
            <Head title="ComoAyudar" />
            <div className="container mt-5">
                <h1 className="display-4">Como Ayudar</h1>
                <p className="lead">
                    ¡Ayúdanos a ayudar! Si te interesa sumarte a nuestra causa,
                    estas son algunas opciones con las cuales puedes apoyar para
                    cambiarle la vida a nuestros niños.
                </p>
                <p className="lead">
                    Dibuja una sonrisa en un niño. ¡Apóyanos!
                </p>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6" style={styles}>
                        {manerasAyudar.map((maneraAyudar) => (
                            <ComoAyudarCard
                                key={maneraAyudar.id}
                                title={maneraAyudar.title}
                                description={maneraAyudar.description}
                                images={maneraAyudar.images}
                            />
                        ))}
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <PaymentCards page={"comoAyudar"} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ComoAyudar;
