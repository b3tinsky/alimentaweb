import React from "react";
import styles from "../styles/components/programasCard.module.scss";
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

/**
Program Cards
param @id id of "programa" to make a unique carousel of images
param @title  title of each "programa"
param @description description of each "programa"
param @images array of image paths (without image extension and "../")
*/

// hacer que la descripcion aparezca en formato de lista
function ProgramasCard({ id, title, description, images }) {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const ProgramasCarousel = () => {
        return (
            <>
                <Carousel
                    controls={false}
                    indicators={false}
                    slide={false}
                    className={styles.carouselContainer}>
                    {images.map((image) => (
                        <Carousel.Item key={`${id}-${image}`}>
                            <img
                                className={styles.carouselImg}
                                src={require(`../images/${image}.jpg`)}
                                alt=""
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </>
        );
    };

    const DescriptionList = () => {
        return (
            <>
                <div className={`${styles.cardText}`}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className="">
                        <ul>
                            {description.map((item, index) => (
                                <li
                                    key={`${id}-${index}-description`}
                                    className={`lead`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className={styles.cards}>
            {id % 2 === 0 ? (
                <>
                    <DescriptionList /> <ProgramasCarousel />
                </>
            ) : isMobile ? (
                <>
                    <DescriptionList /> <ProgramasCarousel />
                </>
            ) : (
                <>
                    <ProgramasCarousel /> <DescriptionList />
                </>
            )}
        </div>
    );
}

export default ProgramasCard;
