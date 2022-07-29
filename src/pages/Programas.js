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
            title: "Atención a la primera infancia 0 - 5 años",
            description:[ // hacer que la descripcion aparezca en formato de lista
                "Favorecer el desarrollo integral de niños y niñas menores de 5 años \n",
                "Acompañamiento nutricional a las mamás durante los primeros 1000 días de vida\n",
                "Propiciar las condiciones que favorezcan el buen estado de salud y nutricion en sus primeros años de vida\n",
                "Desarrollo de habilidades y estimulación temprana en niñas y niños menores de 6 años\n"
            ],

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
            title: "Atencion integral a niños y niñas en edad escolar 6-11 años",

            description:
            [ // hacer que la descripcion aparezca en formato de lista
                "Desarrollo de habilidades sociales promoviendo el respeto y la honestidad en su entorno.",
                "Impulsamos la sana alimentación como un derecho que todo niño y niña merece, teniendo acceso a una alimentación balanceada.",
                "Fomentamos los aprendizajes fundamentales para la vida, apoyándoles con lo necesario para una educación de calidad.",
            ],
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
        {

            id: 2,
            title: "Acompañamiento para padres y madres de familia",

            description: 
            [
                "Promovemos la participacion de los padres de familia en todo lo relacionado con el desarrollo y la educacion de sus hijos",
                "Talleres para el desarrollo de habilidades para la vida y el trabajo",
                "Asesoria y acompañamiento a madrea de familia víctimas de violencia",
                "Ofrecemos ciclos de conferencias sobre temas de interes y promoción de sus derechos y responsabilidadades",
            ],
            // MODIFICAR IMAGENES 
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
            id: 3,
            title:
                "Colecta de juguetes y patrocinadores para festejos del día del niño y navidad",
            description:
                "",
            images: ["programas/3p1", "programas/3p2", "programas/3p3"],
        },
        {
            id: 4,
            title:
                "Colecta de útiles escolares y materiales de apoyo para las asesorías que damos en los comedores",
            description:
                "",
            images: ["programas/4p1", "programas/4p2", "programas/4p3"],
        },
        {
            id: 5,
            title:
                "Colecta permanente de alimento no perecedero y de la canasta básica",
            description:
                "",
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
