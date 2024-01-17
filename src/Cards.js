import React from "react";
import video from "./image/F2.mp4";

const Art = [
  {
    video: video,
  },
];

const Cards = () => {
  return (
    <div className="container" id="top-cards">
      <div className="row">
        <div className="col-md-6 py-3 py-md-2">
          <div className="card">
            {Art.map((item, i) => (
              <video
                key={i}
                autoPlay
                muted
                loop
                style={{
                  width: "200%",
                  borderRadius: "1rem",
                }}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
