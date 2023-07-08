import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly  carouselExampleInterval"
        className="carousel slide carousel-dark "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100 img-1"
              alt="image-1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>Eat fresh, stay healthy</h4>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://images.pexels.com/photos/36736/fruits-strawberries-fruit-red.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="image-2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>100 % Nature </h4>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="imag-3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>Freshness </h4>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://images.pexels.com/photos/4032971/pexels-photo-4032971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100 img-4"
              alt="imag-4"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>Live long</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
