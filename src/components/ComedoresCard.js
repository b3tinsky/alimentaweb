import React, { Component, useState } from "react"

{/**
Program Cards
param @id id of "comedor" to make a unique carousel of images
param @title  title of each "comedor"
param @description description of each "comedor"
param @images array of image paths (without image extension and "../")
param @kids number of kids supported by the "comedor"
param @adultos number of adultos supported by the "comedor"
param @abuelitos number of abuelitos supported by the "comedor"
param @discapacitados number of discapacitados supported by the "comedor"
*/}
function ComedoresCard({ id, title, description, images, kids, adultos, abuelitos, discapacitados}) {
  return (
    <div className="col-12 col-md-6 col-lg-5 mx-auto mb-3 card">
      <div id={`carousel-${id}`} className="carousel slide card-img-top p-2" data-ride="carousel">
        <div className="carousel-inner mh-25">
          {
            images.map((image, index) => (
              <div className={`carousel-item ${(index === 0) ? "active" : ""}`}>
                <img className="d-block w-100" src={require('../images/' + image + '.jpg')} />
              </div>
            ))
          }
        </div>
        <a className="carousel-control-prev" href={`#carousel-${id}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carousel-${id}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Niños y Adolescentes: </b>{kids}</li>
        <li class="list-group-item"><b>Adultos: </b>{adultos}</li>
        <li class="list-group-item"><b>Abuelitos:</b>{abuelitos}</li>
        <li class="list-group-item"><b>Discapacitados: </b>{discapacitados}</li>
      </ul>
    </div>
    );
}

export default ComedoresCard;