import React from "react";
import styles from "../styles/pages/ComoAyudar.module.scss";
/**
Program Cards
param @id id of "manerasDeAyudar" to make a unique carousel of images
param @title  title of each "manerasDeAyudar"
param @description description of each "manerasDeAyudar"
param @images array of image paths (without image extension and "../")
*/

function ComoAyudarCard({ id, title, description, images }) {
    return (
        <div className={`card my-5 ${styles.comoAyudarCard}`}>
            <div
                id={`carousel-${id}`}
                className="carousel slide card-img-top p-2"
                data-ride="carousel">
                <div className="carousel-inner mh-25">
                    {images.map((image, index) => (
                        <div
                            key={image}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}>
                            <img
                                className={`${styles.image} d-block w-100`}
                                src={require("../images/" + image + ".jpg")}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                <a
                    className="carousel-control-prev"
                    href={`#carousel-${id}`}
                    role="button"
                    data-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href={`#carousel-${id}`}
                    role="button"
                    data-slide="next">
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default ComoAyudarCard;
