import React, { useState, useEffect } from "react";

const Product = ({ filteredCategory }) => {
  const [displayedItems, setDisplayedItems] = useState(8);
  const [items, setItems] = useState([]);

  const handleViewMore = () => {
    setDisplayedItems(displayedItems + 4);
  };

  useEffect(() => {
    fetch("https://657eec4c9d10ccb465d583f7.mockapi.io/Items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredItems = filteredCategory
    ? items.filter((item) => item.category === filteredCategory)
    : items;

  return (
    <div>
      <div className="container" id="product-cards">
        {filteredItems.length > 0 && (
          <div className="row" style={{ marginTop: "30px" }}>
            {filteredItems.slice(0, displayedItems).map((item, index) => (
              <div className="col-md-3 py-3 py-md-0" key={index}>
                <div className="card">
                  <img src={item.img} alt={item.title} />
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <h5>
                      {item.price}
                      <span>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {displayedItems < filteredItems.length && (
          <div id="viewmorebtn">
            <button onClick={handleViewMore}>View More</button>
          </div>
        )}
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <hr />
      </div>
      <div className="container">
        <h3 style={{ fontWeight: "bold" }}>PRODUCT.</h3>
        <p>
          Samsung is committed to complying with local laws and regulations and
          applying a strict global code of conduct to all employees. We believe
          that ethical governance is not only a way to respond to rapid changes
          in the global business environment but also a tool for building trust
          with stakeholders, including customers, shareholders, employees,
          business partners, and local communities. In an effort to become one
          of the most ethical companies in the world, Samsung continues to train
          its employees and implement monitoring systems to implement fair and
          transparent corporate governance practices.
        </p>
        <hr />
      </div>
      <div className="container" id="offer">
        <div className="row">
          <div className="col-md-4 py-3 py-md-0">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Free Shipping</h5>
            <p>On order over $1000</p>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <i className="fa-solid fa-truck"></i>
            <h5>Fast Delivery</h5>
            <p>Worldwide</p>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <i className="fa-solid fa-thumbs-up"></i>
            <h5>Big Choice</h5>
            <p>Of product</p>
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
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <b>Home</b>
                  </li>
                  <li>
                    <b>About</b>
                  </li>
                  <li>
                    <b>Contact</b>
                  </li>
                  <li>
                    <b>Services</b>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <b>Smart Phone</b>
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
                <div className="social-links mt-3">
                  <b className="twitter" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-twitter"></i>
                  </b>
                  <b className="facebook" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </b>
                  <b className="google-plus" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-google-plus"></i>
                  </b>
                  <b className="instagram" style={{ marginLeft: "0.5rem" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </b>
                  <b className="linkedin" style={{ marginLeft: "0.5rem" }}>
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
            &copy; Copyright <strong>Samsung</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed By <b>Max</b>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
