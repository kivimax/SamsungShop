import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <>
      <div className="w">
        <div className="c">
          <input type="radio" name="slide" id="c1" checked />
          <label htmlFor="c1" className="cart">
            <div className="r">
              <div className="ic">1</div>
              <div className="des">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="cart">
            <div className="r">
              <div className="ic">2</div>
              <div className="des">
                <h4>Digital Technology</h4>
                <p>Gets better every day - stay tuned</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="cart">
            <div className="r">
              <div className="ic">3</div>
              <div className="des">
                <h4>Globalization</h4>
                <p>Help people all over the world</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="cart">
            <div className="r">
              <div className="ic">4</div>
              <div className="des">
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Slider;
