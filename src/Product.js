import React from "react";
import img from "./image/a1.webp";
import img1 from "./image/a2.webp";
import img2 from "./image/a3.webp";
import img3 from "./image/a4.webp";
import img4 from "./image/a5.webp";
import img5 from "./image/a6.webp";
import img6 from "./image/a7.webp";
import img7 from "./image/a8.webp";
import img8 from "./image/a9.webp";
import img9 from "./image/a10.webp";
import img10 from "./image/a11.webp";
import img11 from "./image/a12.webp";
import img12 from "./image/a13.webp";
import img13 from "./image/a14.jpg";
import img14 from "./image/a15.jpg";
import img15 from "./image/a16.jpg";
import img16 from "./image/a17.jpg";
import img17 from "./image/a18.jpeg";
import img18 from "./image/a19.jpg";
import img19 from "./image/a20.jpg";

const Items = [
  {
    title: "Galaxy S23",
    description: "rfdoeeeo ",
    price: "120$",
    img: img,
    category: "Phone",
  },
  {
    title: "Galaxy Z Fold 5",
    description: "rfdoeeeo ",
    price: "120$",
    img: img1,
    category: "Phone",
  },
  {
    title: "Galaxy Watch",
    description: "rfdoeeeo ",
    price: "120$",
    img: img2,
    category: "Smart Watch",
  },
  {
    title: "Galaxy Watch",
    description: "rfdoeeeo ",
    price: "120$",
    img: img3,
    category: "Smart Watch",
  },
  {
    title: "Galaxy S23 Ultra",
    description: "rfdoeeeo ",
    price: "120$",
    img: img4,
    category: "Phone",
  },
  {
    title: "Galaxy S23 Green",
    description: "rfdoeeeo ",
    price: "120$",
    img: img5,
    category: "Phone",
  },
  {
    title: "Galaxy Z Flip",
    description: "rfdoeeeo ",
    price: "120$",
    img: img6,
    category: "Phone",
  },
  {
    title: "Galaxy Watch",
    description: "rfdoeeeo ",
    price: "120$",
    img: img7,
    category: "Smart Watch",
  },
  {
    title: "Galaxy TV",
    description: "rfdoeeeo ",
    price: "120$",
    img: img8,
    category: "TV",
  },
  {
    title: "Galaxy TV",
    description: "rfdoeeeo ",
    price: "120$",
    img: img9,
    category: "TV",
  },
  {
    title: "Galaxy Watch",
    description: "rfdoeeeo ",
    price: "120$",
    img: img10,
    category: "Smart Watch",
  },
  {
    title: "Galaxy TV",
    description: "rfdoeeeo ",
    price: "120$",
    img: img11,
    category: "TV",
  },
  {
    title: "Galaxy S23 Ultra",
    description: "rfdoeeeo ",
    price: "120$",
    img: img12,
    category: "Phone",
  },
  {
    title: "Samsung Washing machine ",
    description: "rfdoeeeo ",
    price: "120$",
    img: img13,
    category: "Washing machine",
  },
  {
    title: "Samsung Washing machine",
    description: "rfdoeeeo ",
    price: "120$",
    img: img14,
    category: "Washing machine",
  },
  {
    title: "Samsung Washing machine",
    description: "rfdoeeeo ",
    price: "120$",
    img: img15,
    category: "Washing machine",
  },
  {
    title: "Samsung Fridge ",
    description: "rfdoeeeo ",
    price: "120$",
    img: img16,
    category: "Fridge",
  },
  {
    title: "Samsung Fridge",
    description: "rfdoeeeo ",
    price: "120$",
    img: img17,
    category: "Fridge",
  },
  {
    title: "Samsung Fridge ",
    description: "rfdoeeeo ",
    price: "120$",
    img: img18,
    category: "Fridge",
  },
  {
    title: "Samsung Fridge",
    description: "rfdoeeeo ",
    price: "120$",
    img: img19,
    category: "Fridge",
  },
];

const Product = ({ filteredCategory }) => {
  const [displayedItems, setDisplayedItems] = React.useState(8);

  const handleViewMore = () => {
    setDisplayedItems(displayedItems + 4);
  };

  const filteredItems = filteredCategory
    ? Items.filter((item) => item.category === filteredCategory)
    : Items;

  return (
    <div>
      <div className="container" id="product-cards">
        <div className="row" style={{ marginTop: "30px" }}>
          {filteredItems.slice(0, displayedItems).map((item, index) => (
            <div className="col-md-3 py-3 py-md-0" key={index}>
              <div className="card">
                <img src={item.img} alt="" />
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
          in the global business environment, but also a tool for building trust
          with stakeholders, including customers, shareholders, employees,
          business partners and local communities. In an effort to become one of
          the most ethical companies in the world, Samsung continues to train
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
            <p>World wide</p>
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
    </div>
  );
};

export default Product;
