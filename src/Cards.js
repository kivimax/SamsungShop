import React from "react";
import img from "./image/t2.jpg";
import img1 from "./image/t1.jpg";

const Art = [
  {
    img: img,
    imgl: img1,
  },
];

const Cards = () => {
  return (
    <div className="container" id="top-cards">
      <div className="row">
        <div className="col-md-6 py-3 py-md-2">
          <div className="card">
            {Art.map((item, i) => (
              <img key={i} src={item.imgl} alt={`item-${i}`} />
            ))}
            <div className="card-img-overlay"></div>
          </div>
        </div>
        <div className="col-md-6 py-3 py-md-2">
          <div className="card">
            {Art.map((item, index) => (
              <img key={index} src={item.img} alt={`item-${index}`} />
            ))}
            <div className="card-img-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
