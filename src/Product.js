import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationRounded from "./Pagination";

const Product = ({ filteredCategory, searchValue }) => {
  const [displayedItems] = useState(8);
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (order) => {
    const sorted = [...items];
    if (order === "asc") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (order === "desc") {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (order === "max") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSortedItems(sorted);
    setSortBy(order);
  };

  const handleSortAlphabetically = () => {
    handleSort("alphabetical");
  };

  useEffect(() => {
    fetch(`https://657eec4c9d10ccb465d583f7.mockapi.io/Items`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    handleSort(sortBy);
  }, [items, sortBy]);

  const Phones = items.filter((obj) => {
    return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const filteredItems = sortedItems.filter((item) => {
    const matchesCategory =
      !filteredCategory || item.category === filteredCategory;
    const matchesSearch = Phones.includes(item);
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  return (
    <div>
      <div className="container" id="product-cards">
        <div>
          <button className="ab" onClick={handleSortAlphabetically}>
            По алфавиту
          </button>
          <button className="ab" onClick={() => handleSort("asc")}>
            От дешевого к дорогому
          </button>
          <button className="ab" onClick={() => handleSort("desc")}>
            От дорогого к дешевому
          </button>
        </div>
        {filteredItems.length > 0 && (
          <div className="row" style={{ marginTop: "30px" }}>
            {filteredItems
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item, index) => (
                <div className="col-md-3 py-3 py-md-0" key={index}>
                  <Link
                    to={`items/${item.id}`}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <div className="card" style={{ borderRadius: "1rem" }}>
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
                  </Link>
                </div>
              ))}
          </div>
        )}
        {displayedItems < filteredItems.length && (
          <PaginationRounded
            onChangePage={(number) => setCurrentPage(number)}
            totalItems={totalPages}
          />
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
