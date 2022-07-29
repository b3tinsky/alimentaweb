import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/components/comedoresCard.module.scss";

/**
Program Cards
param @id id of "comedor" to make a unique carousel of images
param @title  title of each "comedor"
param @description description of each "comedor"
param @images array of image paths (without image extension and "../")
*/

function ComedoresCard({ id, title, description, images }) {
    return (
        <div className={styles.comedoresCard}>
            <Carousel
                className={styles.comedoresCarousel}
                slide={false}
                indicators={false}
                controls={false}>
                <Carousel.Item>
                    {images.map((image) => (
                        <img
                            key={`${id}-${image}`}
                            className={styles.comedoresImg}
                            src={require("../images/" + image + ".jpg")}
                            alt=""
                        />
                    ))}
                </Carousel.Item>
            </Carousel>
            <div className="">
                <h3 className={styles.comedoresTitle}>{title}</h3>
                <p className="">{description}</p>
            </div>
        </div>
    );
}

export default ComedoresCard;
