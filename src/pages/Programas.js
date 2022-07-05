import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import ProgramasCard from "../components/ProgramasCard";

function Programas() {
    /**
     * Array of "Programas" that will be shown on the website
     */
    const programas = [
        {
            id: 0,
            title: "Atención a la primera infancia",
            description:
                "Fortalecer y optimizar la calidad del desarrollo integral de los niños entre 0 y 5 años.",
            images: [
                "programas/1p1",
                "programas/1p2",
                "programas/1p3",
                "programas/1p4",
                "programas/1p5",
                "programas/1p6",
                "programas/1p7",
                "programas/1p8",
                "programas/1p9",
            ],
        },
        {
            id: 1,
            title: "Atención a niños en vulnerabilidad",
            description:
                "Atención oportuna a niños en vulnerabilidad a fin de fortalecer  su desarrollo en el área de educación y alimentación, promoviendo la paz y generando conductas libres de violencia.",
            images: [
                "programas/2p1",
                "programas/2p2",
                "programas/2p3",
                "programas/2p4",
                "programas/2p5",
                "programas/2p6",
                "programas/2p7",
                "programas/2p8",
                "programas/2p9",
            ],
        },
    ];

    /**
     * Array of "Campañas" that will be shown on the website
     */
    const campaigns = [
        {
            id: 2,
            title:
                "Colecta de juguetes y patrocinadores para festejos del día del niño y navidad",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat libero vel egestas fermentum. In a accumsan ligula.",
            images: ["programas/3p1", "programas/3p2", "programas/3p3"],
        },
        {
            id: 3,
            title:
                "Colecta de útiles escolares y materiales de apoyo para las asesorías que damos en los comedores",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat libero vel egestas fermentum. In a accumsan ligula.",
            images: ["programas/4p1", "programas/4p2", "programas/4p3"],
        },
        {
            id: 4,
            title:
                "Colecta permanente de alimento no perecedero y de la canasta básica",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat libero vel egestas fermentum. In a accumsan ligula.",
            images: ["programas/5p1", "programas/5p2", "programas/5p3"],
        },
    ];

    /**
  	Main page - contains title and description for each section.
  	**/
    return (
        <Layout>
            <Head title="Programas" />
            <div className="container mt-5">
                <h1 className="display-4">Programas</h1>
                <p className="lead">
                    A lo largo de nuestra experiencia, tenemos en marcha
                    distintos programas, proyectos y campañas, logrando enfocar
                    nuestros esfuerzos y apoyo a quienes más lo necesitan.
                </p>
                <div class="row justify-content-center">
                    {programas.map((programa) => (
                        <ProgramasCard
                            id={programa.id}
                            title={programa.title}
                            description={programa.description}
                            images={programa.images}
                        />
                    ))}
                </div>
                <hr></hr>
                <h1 className="display-4">Campañas</h1>
                <p className="lead">
                    Estamos en busca de padrinos que apoyen con donativos
                    mensuales, que se sumen a la causa, para ayudar a que
                    nuestros programas se sigan implementando.
                </p>
                <div class="row justify-content-center">
                    {campaigns.map((campaign) => (
                        <ProgramasCard
                            id={campaign.id}
                            title={campaign.title}
                            description={campaign.description}
                            images={campaign.images}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Programas;
