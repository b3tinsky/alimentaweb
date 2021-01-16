import React, { Component, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

{/**
Program Cards
param @id id of "programa" to make a unique carousel of images
param @title  title of each "programa"
param @description description of each "programa"
param @images array of image paths (without image extension and "../")
*/}
function ProgramasCard({ id, title, description, images }) {
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
    </div>
    );
}

export default ProgramasCard;