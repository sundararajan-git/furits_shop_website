import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer container">
      <h4>Offer</h4>
      <br />
      <div className="grid text-center">
        <figure className="g-col-6 g-col-md-4">
          <img
            src="https://cutewallpaper.org/28/colorful-fruit-hd-wallpaper-free/102451971.jpg"
            alt="allfurits"
            loading="lazy"
          />
          <span>OFFER 50%</span>
          <button type="button" className="btn">
            Add
          </button>
        </figure>
        <figure className="g-col-6 g-col-md-4">
          <img
            src="https://img.freepik.com/premium-photo/juicy-fresh-apples-basket-isolated-white-background_326533-1964.jpg?w=2000"
            alt="apple"
            loading="lazy"
          />
          <span>OFFER 60%</span>
          <button type="button" className="btn">
            Add
          </button>
        </figure>
        <figure className="g-col-6 g-col-md-4">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/927/445/205/oranges-basket-fruit-leaves-wallpaper-preview.jpg"
            alt="orange"
            loading="lazy"
          />
          <span>OFFER 40%</span>
          <button type="button" className="btn">
            Add
          </button>
        </figure>
        <figure className="g-col-6 g-col-md-4">
          <img
            src="https://rare-gallery.com/thumbs/754163-Fruit-Strawberry-Many-Wicker-basket.jpg"
            alt="Strawberry"
            loading="lazy"
          />
          <span>OFFER 30%</span>
          <button type="button" className="btn">
            Add
          </button>
        </figure>
      </div>
    </div>
  );
};

export default Offer;
