import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setFilteredCategory }) => {
  const [showCategories, setShowCategories] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [update, setUpdate] = React.useState("Страница 1");
  const categories = [
    "Phone",
    "TV",
    "Washing machine",
    "Fridge",
    "Smart Watch",
  ];

  const onClickCategories = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setFilteredCategory(category);
  };

  const clickUpdate = () => {
    setUpdate("Страница 2");
  };

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <button className="navbar-toggler">
          <span>
            <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <b
                className="nav-link active"
                aria-current="page"
                onClick={clickUpdate}
              >
                {update}
              </b>
            </li>
            <li className="nav-item">
              <Link to="/about" target="_blank" className="nav-link">
                About Samsung
              </Link>
            </li>
            <li className="nav-item dropdown">
              <b
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShowCategories(!showCategories)}
              >
                Category
              </b>
              <div>
                <ul
                  className={`dropdown-menu ${showCategories ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "white" }}
                >
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => onClickCategories(category)}
                      className={selectedCategory === category ? "active" : ""}
                    >
                      <b className="dropdown-item">{category}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" target="_blank" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              id="search-btn"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
