import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import ProgramasCard from "../components/ProgramasCard";
import styles from "../styles/pages/Programas.module.scss";

function Programas() {
    /**
     * Array of "Programas" that will be shown on the website
     */
    const programas = [
        {
            id: 0,
            title: "Atención a la primera infancia 0 - 5 años",
            description: [
                "Favorecer el desarrollo integral de niños y niñas menores de 5 años \n",
                "Acompañamiento nutricional a las mamás durante los primeros 1000 días de vida\n",
                "Propiciar las condiciones que favorezcan el buen estado de salud y nutricion en sus primeros años de vida\n",
                "Desarrollo de habilidades y estimulación temprana en niñas y niños menores de 6 años\n",
            ],

            images: ["programas/1p1"],
        },
        {
            id: 1,
            title:
                "Atencion integral a niños y niñas en edad escolar 6-11 años",

            description: [
                "Desarrollo de habilidades sociales promoviendo el respeto y la honestidad en su entorno.",
                "Impulsamos la sana alimentación como un derecho que todo niño y niña merece, teniendo acceso a una alimentación balanceada.",
                "Fomentamos los aprendizajes fundamentales para la vida, apoyándoles con lo necesario para una educación de calidad.",
            ],
            images: ["programas/2p1"],
        },
        {
            id: 2,
            title: "Acompañamiento para padres y madres de familia",

            description: [
                "Promovemos la participacion de los padres de familia en todo lo relacionado con el desarrollo y la educacion de sus hijos",
                "Talleres para el desarrollo de habilidades para la vida y el trabajo",
                "Asesoria y acompañamiento a madrea de familia víctimas de violencia",
                "Ofrecemos ciclos de conferencias sobre temas de interes y promoción de sus derechos y responsabilidadades",
            ],
            // MODIFICAR IMAGENES
            images: ["programas/3p1"],
        },
    ];

    /**
     * Array of "Campañas" that will be shown on the website
     */
    const campaigns = [
        {
            id: 1,
            title:
                "Colecta de juguetes y patrocinadores para festejos del día del niño y navidad",
            images: ["programas/3p2"],
        },
        {
            id: 2,
            title:
                "Colecta de útiles escolares y materiales de apoyo para las asesorías que damos en los comedores",
            images: ["programas/4p1"],
        },
        {
            id: 3,
            title:
                "Colecta permanente de alimento no perecedero y de la canasta básica",
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
                <div className={styles.cardContainer}>
                    {programas.map((programa) => (
                        <ProgramasCard
                            key={`programa-${programa.id}`}
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
                <div className="col justify-content-center">
                    {campaigns.map((campaign) => (
                        <ProgramasCard
                            key={`campaign-${campaign.id}`}
                            id={campaign.id}
                            title={campaign.title}
                            description={[]}
                            images={campaign.images}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Programas;
