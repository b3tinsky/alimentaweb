import React from "react";
import ComedoresCard from "../components/ComedoresCard";
import Layout from "../components/layout";
import Head from "../components/head";
import styles from "../styles/pages/Comedores.module.scss";

function Comedores() {
    /**
     * Array of "Comedores" information that will be shown on the website
     */
    const comedores = [
        {
            id: 0,
            title: "Col. Carmen Serdán",
            description:
                "Ofrecemos apoyo alimentario a niños, madres de familia y abuelitos, con el fin de complementar su plan nutricional familiar. También ofrecemos talleres formativos y de fomento educativo por proyecto. En este comedor se tiene un programa especial de atención a la primera infancia.",
            images: ["comedores/1c1"],
        },
        {
            id: 1,
            title: "Col. Santa Cecilia",
            description:
                "Ofrecemos talleres formativos, culturales, de fomento educativo y se otorgan alimentos nutritivos esenciales, especialmente para niños. Este comedor, tiene el fin de reducir a los niños en situación de calle y aumentar sus conocimientos y valores morales, para un desarrollo integral en la niñez.",
            images: ["comedores/2c1"],
        },
        {
            id: 2,
            title: "Col. Garza Nieto (Apoyo alimentario)",
            description:
                "Ofrecemos apoyo escolar a niños con algún tipo de rezago, a su vez, otorgamos apoyo en su alimentación básica para niños, madres de familia, abuelitos y a algunos migrantes de la zona.",
            images: ["comedores/3c1"],
        },
        {
            id: 3,
            title: "Juárez Nuevo León",
            description:
                "Ofrecemos apoyo alimentario a niños, madres de familia y abuelitos, con el fin de complementar su plan nutricional familiar. También ofrecemos talleres formativos y de fomento educativo por proyecto. En este comedor se tiene un programa especial de atención a la primera infancia.",
            images: ["comedores/3c1"], // actualizar imagenes
        },
        {
            id: 4,
            title: "Cienega de Flores (Apoyo alimentario)",
            description:
                "Ofrecemos apoyo escolar a niños con algún tipo de rezago, a su vez, otorgamos apoyo en su alimentación básica para niños, madres de familia, abuelitos y a algunos migrantes de la zona.",
            images: ["comedores/3c1"], // actualizar imagenes
        },
    ];

    /**
 	Main page - contains title and description for each section.
  	*/

    return (
        <Layout>
            <Head title="Comedores" />
            <div className="container my-5">
                <h1 className="display-4">Comedores</h1>
                <p className="lead">
                    Contamos con 5 ubicaciones en el area metropolitana de
                    Monterrey y sus al rededores. En estas ubicaciones se
                    proporcionan diferentes tipos de apoyo alimentario y
                    formativos.
                </p>
                <div className={styles.cardContainer}>
                    {comedores.map((comedor) => (
                        <ComedoresCard
                            key={`comedor-${comedor.id}`}
                            id={comedor.id}
                            title={comedor.title}
                            description={comedor.description}
                            images={comedor.images}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Comedores;
