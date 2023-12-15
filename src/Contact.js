import React from "react";

const Contack = () => {
  return (
    <div>
      <div className="container" id="contact">
        <h1 className="text-center">CONTACT US</h1>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fas fa-phone"> Phone</i>
              <h6>+() 000-00-00</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fa-solid fa-envelope"> Email</i>
              <h6>example@gmail.com</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="fa-solid fa-location-dot"> Address</i>
              <h6>Qusar</h6>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <input
              type="number"
              className="form-control form-control"
              placeholder="Phone"
            />
          </div>
          <div className="form-group" style={{ marginTop: "30px" }}>
            <textarea
              className="form-control"
              id=""
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div id="messagebtn" className="text-center">
            <button>Message</button>
          </div>
        </div>
      </div>

      <footer id="footer" style={{ marginTop: "50px" }}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-content">
                <h3>Samsung</h3>
                <p>Official dealer</p>
                <p>
                  Azerbaijan <br />
                  Qusar <br />
                </p>
                <strong>
                  <i className="fas fa-phone"></i> Phone:
                  <strong>+(994) 000 - 00 - 00</strong>
                </strong>
                <br />
                <strong>
                  <i className="fa-solid fa-envelope"></i> Email:
                  <strong>example@gmail.com</strong>
                </strong>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li>
                    <b>Home</b>
                  </li>
                  <li>
                    <b>About</b>
                  </li>
                  <b>Contact</b>
                  <li>
                    <b>Services</b>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <b>Smart Whone</b>
                  </li>
                  <li>
                    <b>Smart Watch</b>
                  </li>
                  <li>
                    <b>TV</b>
                  </li>
                  <li>
                    <b>Fridge</b>
                  </li>
                  <li>
                    <b>Washing machine</b>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Network</h4>
                <div className="socail-links mt-3">
                  <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-twitter"></i>
                  </b>
                  <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </b>
                  <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-google-plus"></i>
                  </b>
                  <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </b>
                  <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong>Samsung</strong>.All Rights Reserved
          </div>
          <div className="credits">
            Designed By <b>Max</b>
          </div>
        </div>
      </footer>

      <b className="arrow">
        <i>
          <img src="./image/up-arrow.png" alt="" width="50px" />
        </i>
      </b>
    </div>
  );
};

export default Contack;
